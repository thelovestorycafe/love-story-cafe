import styles from "./styles.module.css";

const SliderDots = ({ total, current, onClick }) => {
    return (
        <ul className={styles.sliderDots}>
            {Array.from({ length: total }).map((_, idx) => (
                <li
                    key={idx}
                    onClick={() => onClick(idx)}
                    className={`${styles.sliderDot} ${current === idx ? styles.active : ""}`}
                />
            ))}
        </ul>
    );
};

export default SliderDots;