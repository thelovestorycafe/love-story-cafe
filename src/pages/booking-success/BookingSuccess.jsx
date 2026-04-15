import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";

const BookingSuccess = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <h1>Booking Confirmed!</h1>

            <p>{state?.name}</p>
            <p>{state?.guests} People</p>
            <p>{state?.date}</p>
            <p>{state?.time}</p>

            <Button onClick={() => navigate("/")}>
                Go Home
            </Button>
        </div>
    );
};

export default BookingSuccess;