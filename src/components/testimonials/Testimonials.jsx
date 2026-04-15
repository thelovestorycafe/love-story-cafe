import Button from "../ui/button/Button";
import styles from "./styles.module.css";
import Slider from "react-slick";
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

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
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
                        <Slider {...settings}>
                            {testimonials.map((item) => (
                                <div className={styles.card} key={item.id}>
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
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;