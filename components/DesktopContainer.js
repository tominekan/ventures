import IntroContainer from "./IntroContainer";
import Navbar from "./Navbar";

// CSS
import style from "../styles/components/DesktopContainer.module.css"
const DesktopContainer = () => {
    return (
        <div className={style.desktop_container}>
            <Navbar />
            <IntroContainer />
        </div>
    )
}

export default DesktopContainer;