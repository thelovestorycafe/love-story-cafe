import React from "react";
import styles from "./styles.module.css";
import placeholder from "../../assets/images/image.png";
import { Link } from "react-router-dom";

const MenuCardHome = ({ items }) => {
    return (
        <React.Fragment>
            {items.map((item) => (
                <Link to={`/product/${item.id}`} className={styles.menuCard}>
                    <div className={styles.imageWrapper}>
                        <img src={item.image ?? placeholder} alt={item.title} />
                        <span className={styles.priceTag}>₹{item.price}</span>
                    </div>

                    <div className={styles.menuContent}>
                        <h4 className={styles.title}>{item.title}</h4>

                        <div className={styles.meta}>
                            <span className={styles.category}>{item.category}</span>
                        </div>

                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </React.Fragment>
    );
};

export default MenuCardHome;