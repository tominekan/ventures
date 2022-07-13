import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../styles/components/SiteTemplate.module.css";

const SiteTemplate = (props) => {
    return (
        <div className={style.site_template_container}>
            <Navbar/>
            {props.children}
            <Footer />
        </div>
    )
}

export default SiteTemplate;