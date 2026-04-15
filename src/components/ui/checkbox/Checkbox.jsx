import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({
    label,
    checked,
    onChange,
    id
}) => {
    return (
        <label className={styles.customCheckbox} htmlFor={id}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <span className={styles.checkmark}></span>
            {label && <span className={styles.checkboxLabel}>{label}</span>}
        </label>
    );
};

export default Checkbox;
