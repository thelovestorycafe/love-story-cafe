import styles from "./styles.module.css";
import Heading from "../ui/heading/Heading";
import pasta from "./images/pasta.png";
import pastaVideo from "./images/pasta-video.png";
import playIcon from "./images/play.png";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/icon/arrow-right-long-w.svg";

const features = [
    {
        id: 1,
        icon: "🍔",
        title: "Fast Foods",
        desc: "Health foods are nutrient-dense foods"
    },
    {
        id: 2,
        icon: "🍽️",
        title: "Quality Meals",
        desc: "Prepared with fresh ingredients"
    }
];

const OurStory = () => {

    const navigate = useNavigate();

    return (
        <section className={styles.aboutSection}>
            <div className={`container ${styles.aboutGrid}`}>

                <div className={styles.aboutMedia}>
                    <img src={pasta} alt="Delicious Pasta" />

                    <div className={styles.aboutVideo}>
                        <img src={pastaVideo} alt="Video" />
                        <span className={styles.playIcon}>
                            <img width={24} height={24} src={playIcon} alt="Play" />
                        </span>
                    </div>
                </div>

                <div className={styles.aboutContent}>
                    <Heading
                        label="Our Story"
                        title="Where Quality Food Meet  Excellent Service."
                    />

                    <p className={styles.aboutText}>
                        It's the perfect dining experience where every dish is crafted with
                        fresh, high-quality ingredients and served by friendly staff who go
                        above and beyond.
                    </p>

                    <div className={styles.aboutFeatures}>
                        {features.map((item, index) => (
                            <div key={index} className={styles.featureCard}>
                                <span className={styles.featureIcon}>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <Button
                        rightImage={arrowIcon}
                        onClick={() => navigate("/about-us")}
                    >
                        About More
                    </Button>

                </div>

            </div>
        </section >
    )
}

export default OurStory
