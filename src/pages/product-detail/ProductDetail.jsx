import { useMemo } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { menuItems } from "../../services/menuItems";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import cartIcon from "../../assets/icon/cart-icon.svg";
import MenuCard from "../../components/menu-card/MenuCard";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetail = ({ item: itemProp }) => {
    const { id } = useParams();
    const selectedItem = useSelector(state => state.product.selectedItem);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const item = useMemo(() => {
        if (itemProp) return itemProp;

        if (selectedItem && String(selectedItem.id) === id) {
            return selectedItem;
        }
        return menuItems.find(menuItem => String(menuItem.id) === id);
    }, [itemProp, selectedItem, id]);

    const isVeg = item?.type === "veg";
    const rating = item?.rating ?? 4.5;

    if (!item) {
        return <div className="container">No product selected.</div>;
    }

    return (
        <section className={styles.productDetailWrapper}>
            <div className="container">
                <div className={styles.productHero}>
                    <div className={styles.productImagePanel}>
                        <img className={styles.heroImage} src={item.image} alt={item.title} />
                    </div>

                    <div className={styles.productInfo}>
                        <h2 className={styles.productTitle}>{item.title}</h2>
                        <span className={`${styles.badge} ${isVeg ? styles.veg : styles.nonVeg}`}>
                            {isVeg ? "VEG" : "NON-VEG"}
                        </span>

                        <div className={styles.infoBlock}>
                            <h5>Information</h5>
                            <p>{item.desc}</p>
                        </div>

                        <div className={styles.infoBlock}>
                            <h5>Price</h5>
                            <div className={styles.priceRow}>
                                <h4 className={styles.productPrice}>₹{item.price}</h4>
                                <span className={styles.rating}>⭐ {rating}</span>
                            </div>
                        </div>

                        <Button className={styles.addButton} onClick={() => dispatch(addToCart(item))}>
                            ADD TO CART
                            <img width={16} src={cartIcon} alt="cart" />
                        </Button>
                    </div>
                </div>

                <div className={styles.recentSection}>
                    <div className={styles.recentHeader}>
                        <h3>Recent Products</h3>
                        <Button
                            className={styles.showMoreBtn}
                            variant="outline"
                            onClick={() => navigate("/menu")}>
                            Show More
                        </Button>
                    </div>
                    <div className={styles.recentGrid}>
                        {menuItems.slice(0, 4).map((menuItem) => (
                            <MenuCard
                                key={menuItem.id}
                                item={menuItem}
                                image={menuItem.image}
                                title={menuItem.title}
                                desc={menuItem.desc}
                                price={menuItem.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;