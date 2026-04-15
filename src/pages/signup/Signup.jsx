import { useState } from "react";
import AuthLayout from "../../components/auth-layout/AuthLayout";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

const Signup = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const { name, email, mobile, password } = userData;

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isValidMobile = (value) => /^\+?[0-9]{10,15}$/.test(value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !mobile || !password) {
            alert("Please fill all fields");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidMobile(mobile)) {
            alert("Please enter a valid mobile number.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(userData));
        setUserData({
            name: "",
            email: "",
            mobile: "",
            password: ""
        });
        alert("Account created successfully!");
        navigate("/login");
    };

    return (
        <AuthLayout title="Create Account">
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <Input
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={handleInput}
                    />
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={handleInput}
                    />
                    <Input
                        type="tel"
                        placeholder="Enter your mobile number"
                        name="mobile"
                        value={mobile}
                        onChange={handleInput}
                    />
                    <Input
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={handleInput}
                        type="password"
                    />
                </div>

                <Button
                    fullWidth
                    type="submit"
                >
                    Sign Up
                </Button>
            </form>

            <div className={styles.authFooter}>
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </AuthLayout>
    );
};

export default Signup;