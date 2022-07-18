import Image from "next/image";
import style from "../styles/components/AboutContainer.module.css";
import blogImage from "../public/BLOG_PHOTO_OF_ME.png";

const AboutContainer = () => {
    return (
        <div className={style.about_container}>
            <div className={style.about_text}>
                <h1 className={style.about_section}>About Me</h1>
                <p>
                    I'm a high school student who enjoys coding and vibin'.
                    I'm currently getting into hackathons, blogging, freelancing, 
                    and hand-crafting website idesigns. I don't have any specific passions within coding, 
                    but want to learn as much as possible. My grades are passable 
                    (by my partway-perfectionist standards), and I consider myself decently athletic.
                </p>
            </div>

        <div className={style.about_image} style={{borderRadius: 15, overflow: "hidden"}}>
            <Image
            src={blogImage}
            alt="Image of me confused"></Image>
        </div>
        </div>
    )
}

export default AboutContainer;