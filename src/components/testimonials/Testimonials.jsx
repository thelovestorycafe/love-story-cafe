import Button from "../ui/button/Button";
import styles from "./styles.module.css";
import KeenSlider from "../ui/keen-slider/KeenSlider";
import quoteIcon from "../../assets/icon/quotes.svg";
import arrowIcon from "../../assets/icon/arrow-right-long-w.svg";

const testimonials = [
    {
        id: 1,
        name: "Michael",
        role: "MDS Manufacturing",
        image: "https://i.pravatar.cc/300?img=1",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
        id: 2,
        name: "Diane",
        role: "ABC Rentals",
        image: "https://i.pravatar.cc/300?img=2",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
        id: 3,
        name: "Allison",
        role: "Grand Party Rental",
        image: "https://i.pravatar.cc/300?img=3",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    }
];

const Testimonials = () => {

    return (
        <section className={styles.testimonials}>
            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.left}>
                        <h2>Connect with other members</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                        </p>
                        <Button rightImage={arrowIcon}>
                            Connect now
                        </Button>
                    </div>
                    <div className={styles.sliderWrap}>
                        <KeenSlider
                        //  showArrows={true}
                        perView={3}
                        >
                            {testimonials.map((item) => (
                                <div className="keen-slider__slide"  key={item.id}>
                                    <div className={styles.card}>
                                        <div className={styles.userImage}>
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className={styles.content}>
                                            <label className={styles.quote}>
                                                <img width={20} height={20} src={quoteIcon} alt="Testimonial" />
                                            </label>

                                            <p>{item.review}</p>
                                            <h4>{item.name}</h4>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </KeenSlider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;