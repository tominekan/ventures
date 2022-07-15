import ProjectItem from "./ProjectItem";
import style from "../styles/components/ProjectContainer.module.css";

// Images
import defaultImage from "../public/default_image.png";
import blogPhoto from "../public/BLOG_PHOTO_OF_ME.png";
import background from "../public/Background.png";

export const projects = [
    {
        id: "wild_tale",
        image: blogPhoto,
        title: "A Wild Tale", 
        content: "I like tests, give me a little bit of a chance so that i can test you too.",
        moreImages: [defaultImage, background, blogPhoto],
    },

    {
        id: "wilder_tale",
        image: defaultImage,
        title: "A Wilder Tale",
        content: "I also like tests, give me a little bit of a chance so that i can test you too.",
        moreImages: [defaultImage, defaultImage, defaultImage, defaultImage],
    },

    {
        id: "wildest_tale",
        image: defaultImage,
        title: "A Wildest Tale",
        content: "JM I'm a onefour veteran, boss of my hood cause I back my section, when I met the streets and slapped that thing",
        moreImages: [defaultImage, defaultImage],
    }
]

const ProjectContainer = () => {
    return (
        <div className={style.project_container}>
            <h1 className={style.project_section}>Projects</h1>
            {projects.map((project) => {
                return (
                    <ProjectItem
                    projectID={project.id}
                    projectImage={project.image}
                    projectTitle={project.title}>
                        {project.content}
                    </ProjectItem>
                )
            })}
        </div>
    )
}

export default ProjectContainer;