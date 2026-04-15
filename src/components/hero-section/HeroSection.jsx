import styles from "./styles.module.css";
import heroBanner from "./images/hero-banner.png";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/icon/arrow-right-long.svg";

const HeroSection = () => {

    const navigate = useNavigate();

    const handleViewMenu = () => {
        navigate("/menu");
    }

    const handleBookTable = () => {
        navigate("/book-table");
    };
    return (
        <section className={styles.heroBanner}>
            <img src={heroBanner} alt="Coffee banner" />

            <div className="container">
                <div className={styles.bannerContent}>
                    <span className={styles.subtitle}>Welcome to Our Café</span>

                    <h1>
                        Brewed Moments. <br />
                        <span>Real Stories.</span>
                    </h1>
                    <p>
                        Warm coffee, cozy corners, and conversations that feel like home.
                        A café where every cup carries a story and every visit becomes a memory.
                    </p>

                    <div className={styles.heroActions}>
                        <Button onClick={handleBookTable} rightImage={arrowIcon}>
                            Reserve Your Table
                        </Button>
                        <Button onClick={handleViewMenu} variant="outline">
                            View Menu
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;