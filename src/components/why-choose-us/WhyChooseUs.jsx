import Heading from "../ui/heading/Heading";
import styles from "./styles.module.css";

const features = [
    {
        icon: "🍽️",
        title: "Fresh Food",
        desc: "We prepare every dish using fresh ingredients."
    },
    {
        icon: "⚡",
        title: "Fast Service",
        desc: "Quick and friendly service for all customers."
    },
    {
        icon: "⭐",
        title: "Best Quality",
        desc: "Premium quality food and beverages."
    },
    {
        icon: "💰",
        title: "Affordable Price",
        desc: "Delicious food at reasonable prices."
    },
    {
        icon: "🏡",
        title: "Cozy Ambience",
        desc: "Perfect place to relax with friends."
    },
    {
        icon: "🧼",
        title: "Hygienic Kitchen",
        desc: "Clean and safe food preparation."
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.whySection}>
            <div className="container">
                <Heading
                    label="Why Us"
                    title="Why Choose Us"
                />

                <div className={styles.grid}>
                    {features.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;