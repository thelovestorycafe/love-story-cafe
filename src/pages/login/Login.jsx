import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth-layout/AuthLayout";
import styles from "./styles.module.css";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleInput = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No user found. Please signup first.");
            return;
        }

        if (storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("currentUser", JSON.stringify(storedUser));
            alert("Login successful! Welcome back!");
            navigate("/");
        } else {
            alert("Invalid email or password");
        }
        setEmail("");
        setPassword("");
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
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
                    Login
                </Button>
            </form>

            <p className={styles.authFooter}>
                Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>

        </AuthLayout>
    );
};

export default Login;