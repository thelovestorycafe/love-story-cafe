import React, { useState } from "react";
import styles from "./styles.module.css";
import Heading from "../ui/heading/Heading";
import CategoryTabs from "../category-tabs/CategoryTabs";
import MenuCardHome from "../menu-card-home/MenuCardHome";
import { menuItems } from "../../services/menuItems";

const MenuPreview = () => {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? menuItems
            : menuItems.filter(item => item.category === active);

    return (
        <section className={styles.menuSection}>
            <div className="container">
                <Heading
                    label="Our Menu"
                    title="Explore Our Delicious Menu"
                    center={true}
                />
                <CategoryTabs active={active} setActive={setActive} />

                <div className={styles.menuGrid}>
                    <MenuCardHome items={filtered} />
                </div>
            </div>
        </section>
    );
}

export default MenuPreview;