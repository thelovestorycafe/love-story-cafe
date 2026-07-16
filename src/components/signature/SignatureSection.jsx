import { useMemo } from "react";
import styles from "./styles.module.css";
import KeenSlider from "../ui/keen-slider/KeenSlider";
import Heading from "../ui/heading/Heading";
import SignatureMenuCard from "./SignatureMenuCard";
import { menuItems } from "../../services/menuItems";

const SignatureSection = () => {
  // const randomItems = useMemo(() => {
  //     return [...menuItems]
  //         // eslint-disable-next-line
  //         .sort(() => 0.5 - Math.random())
  //         .slice(0, 8);
  // }, []);
  const randomItems = useMemo(() => {
    const foodCategories = ["Pizza", "Pasta", "Noodles", "Friedrice"];

    return (
      [...menuItems]
        .filter((item) => foodCategories.includes(item.category))
        // eslint-disable-next-line
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)
    );
  }, []);

  return (
    <section className={styles.signatureSection}>
      <div className="container">
        <Heading
          label="Chef’s Signature Picks"
          title="Handpicked favorites from our exclusive menu"
          center
        />

        <KeenSlider showArrows={true}>
          {randomItems.map((item) => (
            <div className="keen-slider__slide" key={item.id}>
              <SignatureMenuCard
                image={item.image}
                name={item.title}
                description={item.desc}
                price={item.price}
                offer={item.offer}
                item={item}
              />
            </div>
          ))}
        </KeenSlider>
      </div>
    </section>
  );
};

export default SignatureSection;
