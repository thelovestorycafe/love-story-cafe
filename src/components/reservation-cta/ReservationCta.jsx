// import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import styles from "./styles.module.css";

const ReservationCta = () => {
  //   const navigate = useNavigate();

  //   const handleBookTable = () => {
  //     navigate("/book-table");
  //   };

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <h2>Ready to Enjoy a Delicious Meal?</h2>

        <p>
          Reserve your table now and enjoy an amazing dining experience with
          delicious food and cozy ambience.
        </p>
        <a
          href="https://www.zomato.com/kolkata/the-love-story-cafe-science-city-area/book"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Reserve Now
        </a>
        {/* 
        <Button className={styles.ctaBtn} onClick={handleBookTable}>
          Reserve a Table
        </Button> */}
      </div>
    </section>
  );
};

export default ReservationCta;
