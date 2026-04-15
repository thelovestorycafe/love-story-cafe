import React from 'react';
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const MenuCard = ({ image, title, desc, price, item }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${item.id}`)
    }
    const handleAdd = (e) => {
        e.stopPropagation();
        dispatch(addToCart(item));
    };

    return (
        <div
            className={styles.card}
            onClick={handleCardClick}
        >
            <div className={styles.imgBox}>
                <img src={image} alt={title} />
            </div>

            <div className={styles.cardContent}>
                <h4>{title}</h4>
                <p className={styles.desc}>{desc}</p>

                <div className={styles.bottomRow}>
                    <span className={styles.price}>₹{price}</span>
                    <button
                        className={styles.addBtn}
                        onClick={handleAdd}
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;