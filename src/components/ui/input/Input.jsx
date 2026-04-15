import React from "react";
import styles from "./styles.module.css";

const Input = ({
    type = "text",
    label,
    showLabel = true,
    name,
    value,
    placeholder = "",
    disabled = false,
    onChange,
    className = "",
    error = "",
    required = false,
}) => {
    const id = `input-${name || "field"}`;

    const inputClasses = [
        styles.inputField,
        error && styles.errorField,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={styles.inputWrapper}>
            {label && showLabel && (
                <label htmlFor={id} className={styles.inputLabel}>
                    {label} {required && <span className={styles.required}>*</span>}
                </label>
            )}

            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                value={value}
                className={inputClasses}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />

            {error && (
                <span id={`${id}-error`} className={styles.errorText}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;