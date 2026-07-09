import React from "react";
import styles from "./styles.module.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../features/cart/cartSlice";

const MenuCard = ({ image, title, desc, price }) => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const handleCardClick = () => {
  //     navigate(`/product/${item.id}`);
  //   };
  //   const handleAdd = (e) => {
  //     e.stopPropagation();
  //     dispatch(addToCart(item));
  //   };

  return (
    <div className={styles.card}>
      <div className={styles.imgBox}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.cardContent}>
        <h4>{title}</h4>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.bottomRow}>
          <span className={styles.price}>₹{price}</span>
          <a
            href="https://www.zomato.com/kolkata/the-love-story-cafe-science-city-area/book"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addBtn}
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
