import styles from "./Footer.module.css";
import {Link} from "react-router-dom";

const Footer = () => {   
   return (<footer className={styles["main-footer"]}>
        <nav>
            
            <ul className={styles["main-footer__links"]}>
                <li class={styles["main-footer__link"]}>
                    <Link to="#">Support</Link>
                </li>
                <li className={styles["main-footer__link"]}>
                    <Link to="#">Terms of Use</Link>
                </li>
            </ul>
        </nav>
    </footer>)
}

export default Footer;