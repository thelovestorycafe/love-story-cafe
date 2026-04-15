import styles from "./styles.module.css";

const AuthLayout = ({ title, children }) => {
    return (
        <section className={styles.authWrapper}>
            <div className={styles.authBox}>
                <h2>{title}</h2>
                {children}
            </div>
        </section>
    );
};

export default AuthLayout;