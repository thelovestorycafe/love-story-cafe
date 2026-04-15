import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

const SignatureMenuCard = ({ name, description, price, image, offer, item }) => {

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
        <div onClick={handleCardClick} className={styles.menuCard}>

            <div className={styles.menuCardImage}>
                <img src={image} alt={name} />

                {offer?.active && (
                    <span className={styles.offerBadge}>
                        {offer.text}
                    </span>
                )}
            </div>

            <h4 className={styles.menuCardTitle}>{name}</h4>

            <p className={styles.menuCardSubtitle}>
                {description}
            </p>

            <div className={styles.bottomRow}>
                <span className={styles.price}>₹{price}</span>
                <button onClick={handleAdd} className={styles.addBtn}>
                    Add
                </button>
            </div>

        </div>
    );
};

export default SignatureMenuCard;