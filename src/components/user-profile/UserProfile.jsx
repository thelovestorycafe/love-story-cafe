import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import userIcon from "../../assets/icon/user-icon.svg";
import profileIcon from "../../assets/icon/profile-icon.svg";
import logOut from "../../assets/icon/logout-icon.svg";
import carIcon from "../../assets/icon/cart.svg";

const UserProfile = ({ currentUser }) => {
    const navigate = useNavigate();

    const handleLogin = () => navigate("/login");

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    return (
        <div className={styles.userWrapper}>
            <div className={styles.user}>
                <img src={userIcon} alt="user" width={28} height={28} />
                {currentUser ? <span>Hello, <label>{currentUser.name}</label></span> : "Hello, Sign in"
                }
            </div>

            <div className={styles.userDropdownMenu}>
                {!currentUser && (
                    <span className={styles.loginSign} onClick={handleLogin}>
                        Login / Signup
                    </span>
                )}

                <ul>
                    <li>
                        <img width={20} height={20} src={profileIcon} alt="profile" />
                        My Profile
                    </li>

                    <li>
                        <img width={20} height={20} src={carIcon} alt="cart" />
                        My Orders
                    </li>

                    {currentUser && (
                        <li onClick={handleLogout} className={styles.logout}>
                            <img width={20} height={20} src={logOut} alt="logout" />
                            Sign Out
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;