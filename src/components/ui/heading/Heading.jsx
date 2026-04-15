import styles from "./styles.module.css";

const Heading = ({
    center = false,
    title,
    label,
    subtitle,
    // eslint-disable-next-line no-unused-vars
    as: Tag = "h2"
}) => {

    return (
        <div className={`${styles.wrapper} ${center ? styles.center : ""}`}>

            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <Tag className={styles.heading}>
                {title}
            </Tag>

            {subtitle && (
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            )}

        </div>
    );
};

export default Heading;