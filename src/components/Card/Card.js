import * as React from 'react';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, price, productId }) => {   
  
    return (      
      <div>
        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/product/${productId}`}>
          <div className={styles.card}>
            <div className={styles.titleDiv}>
              <h3 className={styles.title}>{title}</h3>
            </div>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={title} />
              </div>
              <div className={styles.descriptionDiv}>
                  <p className={styles.description}>{description}</p>
              </div>    
              <hr className={styles.hr}></hr>
                  <p className={styles.price}>$ {price}</p>
                <button className={styles.button}>
                  Ver detalle
                </button>
          </div>
        </Link>
      </div>  
    )
}

export default Card

/*
<style jsx>{`
          h3 {
            color:
          }
        `}</style>
*/
