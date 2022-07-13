import IntroContainer from "./IntroContainer";
import Navbar from "./Navbar";
import ProjectContainer from "./ProjectContainer";

// CSS
import style from "../styles/components/DesktopContainer.module.css"


const DesktopContainer = () => {
    return (
        <div className={style.desktop_container}>
            <Navbar />
            <IntroContainer />
            <ProjectContainer />
        </div>
    )
}

export default DesktopContainer;