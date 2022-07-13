import IntroContainer from "./IntroContainer";
import ProjectContainer from "./ProjectContainer";
import SiteTemplate from "./SiteTemplate";

const DesktopContainer = () => {
    return (
        <SiteTemplate>
            <IntroContainer />
            <ProjectContainer />
        </SiteTemplate>
    )
}

export default DesktopContainer;