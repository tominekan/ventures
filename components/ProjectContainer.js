import ProjectItem from "./ProjectItem";
import style from "../styles/components/ProjectContainer.module.css";

// IMPORT THEM IMAGES BABYYYYY

// Old Blog
import oldHome from "../public/OLD_BLAHG/MUSINGS_PAGE.png";
import oldAbout from "../public/OLD_BLAHG/musings_about_page.png";
import oldPost from "../public/OLD_BLAHG/post_page.png";

// Porfolio Website
import portfolioHome from "../public/PORTFOLIO_WEBSITE/intro_page.png";
import portfolioAbout from "../public/PORTFOLIO_WEBSITE/about_page.png";
import portfolioSport from "../public/PORTFOLIO_WEBSITE/sport_page.png";
import portfolioContact from "../public/PORTFOLIO_WEBSITE/contact_page.png";

// Revamped Blog
import newHome from "../public/REVAMPED_BLAHG/desktop_home.png";
import newRead from "../public/REVAMPED_BLAHG/desktop_read.png";
import newArchive from "../public/REVAMPED_BLAHG/desktop_archive.png";
import newAbout from "../public/REVAMPED_BLAHG/desktop_about.png";
import newContact from "../public/REVAMPED_BLAHG/desktop_contact.png";

// This site
import thisHome from "../public/VENTURE_SITE/Ventures.png";
import thisProjects from "../public/VENTURE_SITE/venture_projects.png";
import thisAbout from "../public/VENTURE_SITE/desktop_about.png";
import thisMotive from "../public/VENTURE_SITE/venture_motive.png";

export const projects = [
    {
        id: "old_blahg",
        image: oldHome,
        title: "Tomi's Musings (Website)", 
        content: "This website was made in order to share my thoughts, unfortunately, due to the amount of work I had to do updating the blog every time, it was quickly abandoned.",
        moreImages: [oldHome, oldAbout, oldPost],
    },

    {
        id: "portfolio_website",
        image: portfolioHome,
        title: "Porfolio Website",
        content: "The portfolio website was quite interesting to build because it provided a simple design that I was able to adapt for mobile screens by plugging it full of media queries",
        moreImages: [portfolioHome, portfolioAbout, portfolioSport, portfolioContact],
    },

    {
        id: "revamped_blahg",
        image: newHome,
        title: "Revamped Blog (Design)",
        content: "This is still a design, but I plan on building it out soon enough. I hope to build each section with custom made software (except for security bits).",
        moreImages: [newHome, newRead, newArchive, newAbout, newContact],
    }, 

    {
        id: "venture_site",
        image: thisHome,
        title: "This Site (Ventures)",
        content: "Obviously, I'm not skipping out on this site, it's my first site built with react and next.js. And howver frustrating it was to build it, I'm quite proud of it.",
        moreImages: [thisHome, thisProjects, thisAbout, thisMotive]
    },
]

const ProjectContainer = (props) => {
    return (
        <div className={style.project_container} ref={props.reference}>
            <h1 className={style.project_section}>Projects</h1>
            {projects.map((project) => {
                return (
                    <ProjectItem
                    projectID={project.id}
                    projectImage={project.image}
                    projectTitle={project.title}
                    key={project.id}>
                        {project.content}
                    </ProjectItem>
                )
            })}
        </div>
    )
}

export default ProjectContainer;