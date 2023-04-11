import styles from "./Footer.module.css";

const Footer = () => {   
   return (<footer className={styles["main-footer"]}>
        <nav>
            <ul className={styles["main-footer__links"]}>
                <li class={styles["main-footer__link"]}>
                    <a href="#">Support</a>
                </li>
                <li className={styles["main-footer__link"]}>
                    <a href="#">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>)
}

export default Footer;