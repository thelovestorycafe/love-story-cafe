import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import fbIcon from "../../assets/icon/fb-icon.svg";
import igIcon from "../../assets/icon/ig-icon.svg";
import twIcon from "../../assets/icon/tw-icon.svg";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <h2>Love Story Cafe</h2>

                        <p>
                            Serving delicious food, refreshing drinks,
                            and unforgettable moments since 2024.
                        </p>

                        <div className={styles.social}>
                            <a href="#"><img width={18} height={18} src={fbIcon} alt="Facebook" /></a>
                            <a href="#"><img width={16} height={16} src={igIcon} alt="Instagram" /></a>
                            <a href="#"><img width={16} height={16} src={twIcon} alt="Twitter" /></a>
                        </div>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Quick Links</h4>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about-us">About</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Opening Hours</h4>
                        <ul>
                            <li>Mon - Fri : 10 AM - 10 PM</li>
                            <li>Saturday : 10 AM - 11 PM</li>
                            <li>Sunday : 9 AM - 11 PM</li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4>Contact</h4>
                        <ul>
                            <li>Plot 4SC, Eastern Metropolitan Bypass, Tangra, Kolkata 700105</li>
                            <li>
                                <a href="tel:+917980903088">
                                    +91 7980903088
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@lovestorycafe.com">hello@lovestorycafe.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>© {year} Love Story Cafe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;