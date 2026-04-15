import React, { useState } from "react";
import styles from "./styles.module.css";
import Heading from "../../components/ui/heading/Heading";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const times = ["12:00 PM", "1:00 PM", "2:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

const BookTable = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        guests: 2,
        date: "",
        time: ""
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const updateGuests = (type) => {
        setForm(prev => ({
            ...prev,
            guests: type === "inc" ? prev.guests + 1 : Math.max(1, prev.guests - 1)
        }));
    };

    const handleBooking = () => {
        setSuccess(true);

        setTimeout(() => {
            navigate("/booking-success", { state: form });
        }, 2000);
    };

    return (
        <section className={styles.book}>
            <div className="container">
                <Heading
                    label="Reservation"
                    title="Book Your Table"
                    subtitle="Reserve your seat for a perfect dining experience"
                    center
                />
                <div className={styles.wrapper}>
                    <div className={styles.form}>
                        <Input
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                        />

                        <div className={styles.guestBox}>
                            <span>Guests</span>
                            <div className={styles.counter}>
                                <button onClick={() => updateGuests("dec")}>-</button>
                                <span>{form.guests}</span>
                                <button onClick={() => updateGuests("inc")}>+</button>
                            </div>
                        </div>

                        <Input
                            type="date"
                            name="date"
                            onChange={handleChange}
                        />

                        <div className={styles.timeSlots}>
                            {times.map((t) => (
                                <span
                                    key={t}
                                    className={`${styles.slot} ${form.time === t ? styles.active : ""}`}
                                    onClick={() => setForm({ ...form, time: t })}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <Button fullWidth onClick={handleBooking}>
                            Book Now
                        </Button>

                    </div>

                    <div className={styles.preview}>
                        <h4>Booking Preview</h4>

                        <div className={styles.card}>
                            <p>Guest Name {form.name}</p>
                            <p>Guests {form.guests}</p>
                            <p>Date {form.date}</p>
                            <p>Time{form.time}</p>
                        </div>
                    </div>

                </div>

                {success && (
                    <div className={styles.successOverlay}>
                        <div className={styles.successBox}>
                            <div className={styles.checkmark}></div>
                            <h3>Table Booked!</h3>
                            <p>Your reservation has been confirmed</p>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default BookTable;