import styles from "./styles.module.css";

const categories = [
    "All",
    "Tea",
    "Coffee",
    "Mocktail",
    "Shake",
    "Pizza",
    "Pasta",
    "Noodles",
    "Friedrice"
];

const CategoryTabs = ({ active, setActive }) => {
    return (
        <ul className={styles.menuTabs}>
            {categories.map((item) => (
                <li
                    key={item}
                    className={active === item ? styles.active : ""}
                    onClick={() => setActive(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default CategoryTabs;