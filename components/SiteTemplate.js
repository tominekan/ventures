import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/components/SiteTemplate.module.css";

const SiteTemplate = (props) => {
    return (
        <div className={styles.site_template_container}>
            <Navbar/>
            {props.children}
            <Footer />
        </div>
    )
}

export default SiteTemplate;