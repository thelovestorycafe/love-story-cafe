import { useMemo } from "react";
import styles from "./styles.module.css";
import { menuItems } from "../../services/menuItems";
import Button from "../ui/button/Button";

const Filter = ({ active, setActive }) => {

    const categories = useMemo(
        () => ["All", ...new Set(menuItems.map(({ category }) => category))],
        []
    );

    return (
        <div className={styles.categoryBar}>
            {categories.map(cat => (
                <Button
                    key={cat}
                    onClick={() => setActive(cat)}
                    size="sm"
                    className={`${styles.catBtn} ${active === cat ? styles.active : ""}`}
                >
                    {cat}
                </Button>
            ))}
        </div>
    );
};

export default Filter;