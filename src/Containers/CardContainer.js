import React from 'react'
import Card from '../components/Card/Card';
import { getFirestore } from '../firebase';

const CardContainer = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(()=> {
        const db = getFirestore();
        const productsCollection = db.collection('products');

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

    }, []);
    
    const comprarProducto = (product) => {
        console.log(`Compraste el producto: ${product}`);
    }
    return (
        
        <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {data?.map((producto) => {
                return (
                    <Card
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image}
                        comprar={{comprarProducto}}
                        price={producto.price}
                        />
                )
            })}
        </div>
    )
}

export default CardContainer


// const url = "http://localhost:3001/products";

// fetch(url).then((response) => {
//     if (response.ok) {
//         return response.json();
//     }else{
//         throw response;
//     }
// })
// .then((data) => setData(data))
// .then((data) => console.log(data))
// .catch((error) => console.log(`Error ${error.status}`))