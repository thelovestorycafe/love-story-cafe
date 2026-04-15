import React, { useState, useMemo } from "react";
import styles from "./styles.module.css";
import Filter from "../../components/filter/Filter";
import { menuItems } from "../../services/menuItems";
import MenuCard from "../../components/menu-card/MenuCard";

const MenuListing = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    // Filtered Menu
    const filteredItems = useMemo(() => {
        if (activeCategory === "All") return menuItems;
        return menuItems.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <section className={styles.menuWrapper}>
            <div className="container">
                <section className={styles.banner}>
                    <div className={styles.overlay}>
                        <h2>Delicious Food, Delivered Fast</h2>
                        <p>Experience the taste of premium café dishes</p>
                    </div>
                </section>

                <span className={styles.menuTop}>Explore Dishes</span>

                <Filter
                    active={activeCategory}
                    setActive={setActiveCategory}
                />

                <div className={styles.listing}>
                    {
                        filteredItems.map((item) => (
                            <MenuCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default MenuListing;