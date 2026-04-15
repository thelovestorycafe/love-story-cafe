import React from "react";
import styles from "./styles.module.css";
import Heading from "../../components/ui/heading/Heading";

const About = () => {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.hero}>
                    <Heading
                        title="About Us"
                        subtitle="Crafting delicious moments with love & passion"
                        center
                        as="h1"
                    />
                </div>

                {/* STORY */}
                <div className={styles.section}>
                    <div className={styles.text}>
                        <h2>Our Story</h2>
                        <p>
                            The Love Story Café was born from a passion for great food and
                            warm experiences. We blend taste, quality, and ambiance to create
                            unforgettable dining moments.
                        </p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" alt="cafe" />
                </div>

                {/* FEATURES */}
                <div className={styles.features}>
                    <div className={styles.card}>
                        <h3>Fresh Ingredients</h3>
                        <p>Only the best quality ingredients used daily</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Cozy Ambience</h3>
                        <p>A perfect place for friends & family</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Fast Delivery</h3>
                        <p>Hot & fresh food delivered quickly</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default About;