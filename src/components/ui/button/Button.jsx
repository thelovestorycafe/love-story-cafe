import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const VARIANT_CLASS = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
    accent: styles.btnAccent,
    outline: styles.btnOutline,
};

const SIZE_CLASS = {
    sm: styles.btnSm,
};

const Button = React.forwardRef(
    (
        {
            children,
            variant = "primary",
            size,
            fullWidth,
            loading,
            className,
            disabled,
            leftImage,
            rightImage,
            ...rest
        },
        ref
    ) => {
        const classes = [
            styles.btn,
            VARIANT_CLASS[variant],
            size && SIZE_CLASS[size],
            fullWidth && styles.fullWidth,
            (disabled || loading) && styles.disabled,
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <button
                ref={ref}
                type="button"
                className={classes}
                disabled={disabled || loading}
                {...rest}
            >
                {loading ? (
                    "Loading..."
                ) : (
                    <>
                        {leftImage && <img src={leftImage} alt="" className={styles.icon} />}
                        {children}
                        {rightImage && <img src={rightImage} alt="" className={styles.icon} />}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "accent", "outline"]),
    size: PropTypes.oneOf(["sm"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    leftImage: PropTypes.string,
    rightImage: PropTypes.string,
};

export default React.memo(Button);