import React from 'react'
import { useParams } from 'react-router';
import { getFirestore } from '../firebase';
import CustomArrows from "../components/CustomArrows/CustomArrows"

const CategoryContainer = () => {
    const [data, setData] = React.useState([]);
    const {category} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(()=> {
        const db = getFirestore();
        const productsCollection = db.collection('products').where("category", "==" , category);

        setLoading(true);
        productsCollection
        .get()
        .then((querySnapshot) => {
            console.log(querySnapshot);
            if (querySnapshot.empty) {
                console.log("No hay productos para mostrar")
                setData([]);
            } else {
                setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } )));
            }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [category]);
    
    return (
        <>        
        {loading && <p>Cargando...</p>}
          {error && (
            <p>
                Ha habido un error: {error.status} {error.statusText}
            </p>
        )}
        <CustomArrows data={data}/>
        </>
    )
}

export default CategoryContainer

// const url = "http://localhost:3001/products";

// fetch(url).then((response) => {
//     if (response.ok) {
//         return response.json();
//     }else{
//         throw response;
//     }
// })
// .then((data) => data.filter((product) => product.category === category))       
// .then((data) => setData(data)) 
// .catch((error) => console.log(`Error ${error.status}`))