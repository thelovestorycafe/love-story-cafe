import React from "react";
import styles from "./styles.module.css";
import Heading from "../../components/ui/heading/Heading";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.hero}>
          <Heading
            label="Contact"
            title="Contact Us"
            subtitle="Visit us for a memorable dining experience."
            center
            as="h1"
          />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.map}>
            <iframe
              title="Love Story Cafe Location"
              src="https://www.google.com/maps?q=Plot+4SC,+Eastern+Metropolitan+Bypass,+Tangra,+Kolkata+700105&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.info}>
            <h3>Get in Touch</h3>

            <div className={styles.item}>
              <span>📍</span>
              <p>
                Plot 4SC, Eastern Metropolitan Bypass,
                <br />
                Tangra, Kolkata 700105
              </p>
            </div>

            <div className={styles.item}>
              <span>📞</span>
              <a href="tel:+917980903088">+91 7980903088</a>
            </div>

            <div className={styles.item}>
              <span>✉️</span>
              <a href="mailto:hello@lovestorycafe.com">
                hello@lovestorycafe.com
              </a>
            </div>

            <div className={styles.item}>
              <span>🕒</span>
              <p>
                Mon – Sun
                <br />
                11:00 AM – 11:00 PM
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+4SC,+Eastern+Metropolitan+Bypass,+Tangra,+Kolkata+700105"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionBtn}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
