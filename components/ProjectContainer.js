import ProjectItem from "./ProjectItem";
import style from "../styles/components/ProjectContainer.module.css";

// Images
import defaultImage from "../public/default_image.png";


const ProjectContainer = () => {
    return (
        <div className={style.project_container}>
            <h1 className={style.project_section}>Projects</h1>
            <ProjectItem
            projectName="wild_tale"
            projectImage={defaultImage}
            projectTitle="A Wild Tale">
                I like tests, give me a little bit of a chance so that i can test you too. 
            </ProjectItem>

            <ProjectItem
            projectName="wilder_tale"
            projectImage={defaultImage}
            projectTitle="A Wilder Tale">
                I also like tests, give me a little bit of a chance so that i can test you too. 
            </ProjectItem>

            <ProjectItem
            projectName="wildest_tale"
            projectImage={defaultImage}
            projectTitle="A Wildest Tale">
                JM I'm a onefour veteran, boss of my hood cause I back my section, when I met the streets and slapped that thing
            </ProjectItem>
        </div>
    )
}


export default ProjectContainer;