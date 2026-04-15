import React from "react";
import styles from "./styles.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import UserProfile from "../../components/user-profile/UserProfile";
import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/icon/cart.svg";

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const getNavClass = ({ isActive }) =>
        `${styles.navLink} ${isActive ? styles.active : ""}`;

    const count = useSelector(({ cart }) =>
        cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    const currentUser = useMemo(() => {
        try {
            const user = localStorage.getItem("currentUser");
            return user ? JSON.parse(user) : null;
        } catch {
            return null;
        }
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <React.Fragment>

            <header className={styles.headerWrapper}>
                <div className="container">
                    <nav className={styles.navWrap}>

                        <Link to="/" className={styles.logoWrap}>
                            <img src={logo} alt="Cafe Logo" />
                        </Link>

                        <ul className={styles.navLinks}>
                            <li><NavLink to="/" className={getNavClass}>Home</NavLink></li>
                            <li><NavLink to="/menu" className={getNavClass}>Menu</NavLink></li>
                            <li><NavLink to="/about-us" className={getNavClass}>About</NavLink></li>
                            <li><NavLink to="/contact-us" className={getNavClass}>Contact</NavLink></li>
                            <li><NavLink to="/book-table" className={getNavClass}>Reserve Now</NavLink></li>
                        </ul>

                        <div className={styles.accountWrap}>
                            <UserProfile currentUser={currentUser} />

                            <Link to="/cart" className={styles.cart}>
                                <img src={cartIcon} alt="cart" />
                                {count > 0 && (
                                    <span className={styles.cartBadge}>{count}</span>
                                )}
                            </Link>
                        </div>

                        <div className={styles.mobileRight}>
                            <Link to="/cart" className={styles.cart}>
                                <img src={cartIcon} alt="cart" />
                                {count > 0 && (
                                    <span className={styles.cartBadge}>{count}</span>
                                )}
                            </Link>

                            <span
                                className={styles.menuToggle}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </span>
                        </div>



                    </nav>
                </div>

            </header>
            <ul className={`${styles.mobileMenu} ${menuOpen ? styles.slideIn : styles.slideOut}`}>
                <li><NavLink to="/" className={getNavClass} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/menu" className={getNavClass} onClick={() => setMenuOpen(false)}>Menu</NavLink></li>
                <li><NavLink to="/about-us" className={getNavClass} onClick={() => setMenuOpen(false)}>About</NavLink></li>
                <li><NavLink to="/contact-us" className={getNavClass} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                <li><NavLink to="/book-table" className={getNavClass} onClick={() => setMenuOpen(false)}>Reserve Now</NavLink></li>

                <li className={styles.mobileUser}>
                    <UserProfile currentUser={currentUser} />
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Header;