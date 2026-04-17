import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

import userIcon from "../../assets/icon/user-icon.svg";
import profileIcon from "../../assets/icon/profile-icon.svg";
import logOut from "../../assets/icon/logout-icon.svg";
import carIcon from "../../assets/icon/cart.svg";

const UserProfile = ({ currentUser, onCloseDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const wrapperRef = useRef();

    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleLogin = () => {
        setOpen(false);
        onCloseDrawer?.();
        navigate("/login");
    };

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setOpen(false);
        onCloseDrawer?.();
        navigate("/login");
    };

    return (
        <div className={styles.userWrapper} ref={wrapperRef}>

            {!isMobile && (
                <>
                    <div
                        className={styles.user}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <img src={userIcon} alt="user" width={28} />

                        {currentUser ? (
                            <span>
                                Hello, <b>{currentUser.name}</b>
                            </span>
                        ) : (
                            "Hello, Sign in"
                        )}
                    </div>

                    <div
                        className={`${styles.userDropdownMenu} ${open ? styles.openMenu : ""
                            }`}
                    >
                        {!currentUser && (
                            <span className={styles.loginSign} onClick={handleLogin}>
                                Login / Signup
                            </span>
                        )}

                        <ul>
                            <li>
                                <img src={profileIcon} width={20} />
                                My Profile
                            </li>

                            <li>
                                <img src={carIcon} width={20} />
                                My Orders
                            </li>

                            {currentUser && (
                                <li onClick={handleLogout} className={styles.logout}>
                                    <img src={logOut} width={20} />
                                    Sign Out
                                </li>
                            )}
                        </ul>
                    </div>
                </>
            )}

            {isMobile && (
                <div className={styles.mobileAlways}>
                    {!currentUser ? (
                        <div className={styles.user} onClick={handleLogin}>
                            <img src={userIcon} alt="user" width={28} />
                            Login / Signup
                        </div>
                    ) : (
                        <ul>
                            <li>
                                <img src={profileIcon} width={20} />
                                My Profile
                            </li>

                            <li>
                                <img src={carIcon} width={20} />
                                My Orders
                            </li>

                            <li onClick={handleLogout} className={styles.logout}>
                                Logout
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserProfile;