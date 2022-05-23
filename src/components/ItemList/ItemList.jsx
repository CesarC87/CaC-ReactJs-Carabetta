import * as React from "react";
import Card from "../Card/Card";
import "./ItemList.css";

const ItemList = ({data}) => {
    console.log(data)
 return (
     <>   
    <div className="ItemList">
            {data?.map((producto) => {
                return (
                    <>  
                    <Card
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image}
                        productId={producto.id}
                        price={producto.price}                        
                        />
                    </>
                )
            })}
        </div>
        </>
           )
        
}

export default ItemList

