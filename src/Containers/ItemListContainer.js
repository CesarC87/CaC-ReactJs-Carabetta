import React from "react";
import { getFirestore } from "../firebase";
import CarouselHome from "../components/CarouselHome/CarouselHome";
import CustomArrows from "../components/CustomArrows/CustomArrows";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(()=> {
        const db = getFirestore();
        const productsCollection = db.collection('products');

        setLoading(true);
        productsCollection
        .get()
        .then((querySnapshot) => {
            console.log(querySnapshot);
            if (querySnapshot.empty) {
                console.log("No hay productos para mostrar")
            } else {
                setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } )));
            }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

    }, []);

    return (
        <>
        <div className="carouselContainerHome">
            <CarouselHome />
        </div>        
          
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

export default ItemListContainer

