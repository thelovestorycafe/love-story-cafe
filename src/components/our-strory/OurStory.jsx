import styles from "./styles.module.css";
import Heading from "../ui/heading/Heading";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/icon/arrow-right-long-w.svg";
import pasta from "./images/pasta.png";
import pastaVideo from "./images/pasta-video.png";
import playIcon from "./images/play.png";

import Sparkles from "./images/fork-and-knife.svg";
import Award from "./images/award.svg";
import Heart from "./images/heart.svg";
import Home from "./images/house.svg";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.aboutMedia}>
          <img src={pasta} alt="Delicious Pasta" />
          <span className={styles.establishedBadge}>
            Since <strong>2025</strong>
          </span>

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
            title="Where Every Meal Tells a Love Story."
          />

          <p className={styles.aboutText}>
            At <strong>The Love Story Cafe</strong>, we believe that great food
            brings people together.
          </p>

          <p className={styles.aboutText}>
            Every dish is prepared with fresh, high-quality ingredients,
            passion, and attention to detail.
          </p>

          <div className={styles.storyHighlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <img width={28} height={28} src={Sparkles} alt="Sparkles" />
              </span>

              <div className={styles.highlightContent}>
                <h4>Premium Quality Food</h4>
                <p>Prepared with fresh ingredients and authentic recipes.</p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <img width={36} height={36} src={Award} alt="Award" />
              </span>

              <div className={styles.highlightContent}>
                <h4>Excellence in Every Bite</h4>
                <p>
                  Every dish is crafted with passion and attention to detail.
                </p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <img width={28} height={28} src={Heart} alt="Heart" />
              </span>

              <div className={styles.highlightContent}>
                <h4>Warm Hospitality</h4>
                <p>Friendly service that makes every guest feel welcome.</p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <img width={28} height={28} src={Home} alt="Home" />
              </span>

              <div className={styles.highlightContent}>
                <h4>Cozy Atmosphere</h4>
                <p>
                  Perfect for romantic dates, family gatherings and
                  celebrations.
                </p>
              </div>
            </div>
          </div>

          <Button rightImage={arrowIcon} onClick={() => navigate("/about-us")}>
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
