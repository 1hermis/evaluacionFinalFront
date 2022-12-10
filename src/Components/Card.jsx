import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    

  }

  return (
    <>
    <div className={styles.product}>
      <img className={styles.product_img} src="./images/doctor.jpg" alt="product" />
      <div className={styles.cuerpoCard}>
        <Link to="/Detail">
          <h2 className={styles.product_name}>{name}</h2>
        </Link>

        <p className={styles.tituloo}>{username}</p>
        <div className={styles.product_details}>
          {/* <button onClick={favorite ? removeFav : addFav}>{favorite ? `⭐ fala` : `❤ re`}</button> */}
        </div>
      </div>
    </div>
  </>
  );
};

export default Card;
