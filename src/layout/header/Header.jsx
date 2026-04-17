import React, { useState, useMemo, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import UserProfile from "../../components/user-profile/UserProfile";
import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/icon/cart.svg";
import closeIcon from "../../assets/icon/close.svg";

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
        <>
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
                            <div className={styles.desktopOnly}>
                                <UserProfile currentUser={currentUser} />
                            </div>

                            <span
                                className={styles.menuToggle}
                                onClick={() => setMenuOpen(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </span>

                            <Link to="/cart" className={styles.cart}>
                                <img src={cartIcon} alt="cart" />
                                {count > 0 && (
                                    <span className={styles.cartBadge}>{count}</span>
                                )}
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                <div className={styles.mobileHeader}>
                    <h3>Explore</h3>
                    <span onClick={() => setMenuOpen(false)}>
                        <img width={16} height={16} src={closeIcon} alt="Close" />
                    </span>
                </div>
                <ul className={styles.mobileMenuLink}>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink></li>
                    <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    <li><NavLink to="/book-table" onClick={() => setMenuOpen(false)}>Reserve</NavLink></li>
                </ul>

                <div className={styles.mobileUser}>
                    <UserProfile currentUser={currentUser} onCloseDrawer={() => setMenuOpen(false)} />
                </div>
            </div>
        </>
    );
};

export default Header;