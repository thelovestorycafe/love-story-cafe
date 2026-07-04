import styles from "./styles.module.css";
import arrowLeft from "../../../assets/icon/arrow-left.svg";
import arrowRight from "../../../assets/icon/arrow-right.svg";

const SliderArrow = ({ direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.sliderArrow} ${direction === "left" ? styles.left : styles.right}`}
        >
            {direction === "left" ? <img src={arrowLeft} alt="prev" /> : <img src={arrowRight} alt="Nex" />}
        </button>
    );
};

export default SliderArrow;