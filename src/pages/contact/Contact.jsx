import React from "react";
import styles from "./styles.module.css";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import Heading from "../../components/ui/heading/Heading";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.hero}>
                    <Heading
                        label="Contact"
                        title="Contact Us"
                        subtitle="We’d love to hear from you"
                        center
                        as="h1"
                    />
                </div>

                <div className={styles.wrapper}>
                    <form className={styles.form}>

                        <Input
                            name="name"
                            placeholder="Your Name"
                            required
                        />

                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />

                        <textarea
                            className={styles.textarea}
                            placeholder="Your Message"
                            rows="5"
                            required
                        />

                        <Button type="submit" fullWidth>
                            Send Message
                        </Button>
                    </form>

                    {/* INFO */}
                    <div className={styles.info}>
                        <h3>Get in Touch</h3>
                        <p>📍 Plot 4SC, Eastern Metropolitan Bypass, Tangra, Kolkata 700105</p>
                        <p>📞 +91 7980903088</p>
                        <p>✉️ hello@lovestorycafe.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact