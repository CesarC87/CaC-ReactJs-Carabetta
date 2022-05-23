import React from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { getFirestore } from '../firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams()    

    React.useEffect(()=> {
        setLoading(true);
        // Apuntamos a la base de datos
        const db = getFirestore();
        // Apuntamos a una colección
        const productsCollection = db.collection("products");
        // Apuntamos a un elemento específico
        const item = productsCollection.doc(id);
        // Traemos los datos del producto:
        item.get()
        .then((doc) => {
            if (!doc.exists) {                
                console.log("No hay productos a mostrar");
            } else {
                setProduct({id: doc.id, ...doc.data() });
            }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [id]);
   
    return (
        <div>
          {loading && <p>Cargando...</p>}
          {error && (
            <p>
                Ha habido un error: {error.status} {error.statusText}
            </p>
        )}
             <ItemDetail product={product}/> 
        </div>
    )
}

export default ItemDetailContainer

// const url = `http://localhost:3001/products/${id}`;

// fetch(url).then((response) => {
//     if (response.ok) {
//         return response.json();
//     }else{
//         throw response;
//     }
// })
// .then((data) => setProduct(data))        
// .catch((error) => console.log(`Error ${error.status}`))