import React from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/ui/button/Button";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../features/cart/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className={styles.cartWrapper}>
            <div className="container">
                <h2 className={styles.heading}>Your Cart</h2>

                <div className={styles.cartLayout}>

                    {/* LEFT - Items */}
                    <div className={styles.cartItems}>
                        {cartItems.length === 0 ? (
                            <div className={styles.emptyCart}>
                                Your cart is empty.
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div className={styles.cartItem} key={item.id}>
                                    <img src={item.image} alt={item.title} />

                                    <div className={styles.info}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <p className={styles.price}>₹{item.price}</p>

                                        <div className={styles.qty}>
                                            <button
                                                type="button"
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    <div className={styles.itemTotal}>
                                        ₹{item.price * item.quantity}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* RIGHT - Summary */}
                    <div className={styles.summary}>
                        <h3>Price Details</h3>

                        <div className={styles.row}>
                            <span>Subtotal</span>
                            <span>₹{totalAmount}</span>
                        </div>

                        <div className={styles.row}>
                            <span>Delivery</span>
                            <span>₹40</span>
                        </div>

                        <hr />

                        <div className={`${styles.row} ${styles.totalRow}`}>
                            <span>Total</span>
                            <span>₹{totalAmount + 40}</span>
                        </div>

                        <Button className={styles.checkoutBtn}>
                            Proceed to Checkout
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cart;