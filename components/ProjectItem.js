import Link from "next/link";
import Image from "next/image";
import style from "../styles/components/ProjectItem.module.css";

const ProjectItem = (props) => {
    return (
        <div className={style.project_item}>
            <div className={style.project_image} style={{borderRadius: 10, overflow: "hidden"}}>
                <Image
                src={props.projectImage}
                alt={"Image of " + props.projectTitle}
                layout="responsive"
                ></Image>
            </div>
            <div className={style.project_text}>
                <Link href={"/" + props.projectID}>
                    <a>
                        <p className={style.project_title}>{props.projectTitle}</p>
                    </a>
                </Link>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default ProjectItem;