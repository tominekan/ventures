import IntroContainer from "./IntroContainer";
import ProjectContainer from "./ProjectContainer";
import SiteTemplate from "./SiteTemplate";
import { useRef } from "react";


const DesktopContainer = () => {
    const projectContainerRef = useRef(null);
    const scrollHere = () => projectContainerRef.current.scrollIntoView({
        behavior: "smooth", 
        block: "start"
    });
    
    return (
        <SiteTemplate>
            <IntroContainer do={scrollHere}/>
            <ProjectContainer reference={projectContainerRef}/>
        </SiteTemplate>
    )
}

export default DesktopContainer;