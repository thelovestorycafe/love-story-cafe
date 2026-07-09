import React from "react";
import styles from "./styles.module.css";
import Heading from "../ui/heading/Heading";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

const MenuPreview = () => {
  const navigate = useNavigate();
  const handleViewMenu = () => {
    navigate("/menu");
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <Heading label="Our Menu" title="Explore Our Delicious Menu" />
          <p className={styles.quote}>
            Every dish has a story, every flavour creates a memory.
          </p>
          <p className={styles.description}>
            Welcome to <strong>The Love Story Cafe</strong>, where delicious
            food, warm hospitality, and memorable moments come together. Explore
            our carefully crafted menu featuring mouth-watering pizzas, burgers,
            pasta, refreshing beverages, desserts, and signature chef specials—
            all prepared with fresh ingredients and served with love.
          </p>

          <Button onClick={handleViewMenu}>Explore Full Menu</Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
