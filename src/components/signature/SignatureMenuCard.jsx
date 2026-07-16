import styles from "./styles.module.css";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../features/cart/cartSlice";

const SignatureMenuCard = ({
  name,
  description,
  price,
  image,
  offer,
  // item,
}) => {
  //   const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleCardClick = () => {
  //   navigate(`/product/${item.id}`);
  // };
  // const handleAdd = (e) => {
  //     e.stopPropagation();
  //     dispatch(addToCart(item));
  // };

  return (
    <div className={styles.menuCard}>
      <div className={styles.menuCardImage}>
        <img src={image} alt={name} />

        {offer?.active && (
          <span className={styles.offerBadge}>{offer.text}</span>
        )}
      </div>

      <h4 className={styles.menuCardTitle}>{name}</h4>

      <p className={styles.menuCardSubtitle}>{description}</p>

      <div className={styles.bottomRow}>
        <span className={styles.price}>₹{price}</span>

        <a
          href="https://www.zomato.com/kolkata/the-love-story-cafe-science-city-area/order"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.addBtn}
        >
          Order Now
        </a>
      </div>

      <p className={styles.deliveryNote}>
        Food will be delivered by tomorrow evening only.
      </p>
    </div>
  );
};

export default SignatureMenuCard;
