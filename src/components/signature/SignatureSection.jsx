import { useMemo } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import Heading from "../ui/heading/Heading";
import SignatureMenuCard from "./SignatureMenuCard";
import { menuItems } from "../../services/menuItems";

const SignatureSection = () => {

    const randomItems = useMemo(() => {
        return [...menuItems]
            // eslint-disable-next-line
            .sort(() => 0.5 - Math.random())
            .slice(0, 8);
    }, []);

    const settings = {

        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className={styles.signatureSection}>
            <div className="container">
                <Heading
                    label="Chef’s Signature Picks"
                    title="Handpicked favorites from our exclusive menu"
                    center
                />

                <Slider {...settings} className={styles.slider}>
                    {randomItems.map((item) => (
                        <SignatureMenuCard
                            key={item.id}
                            image={item.image}
                            name={item.title}
                            description={item.desc}
                            price={item.price}
                            offer={item.offer}
                            item={item}
                        />
                    ))}
                </Slider>
            </div>
        </section >
    );
};

export default SignatureSection;