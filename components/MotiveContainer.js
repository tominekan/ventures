import Image from "next/image";
import style from "../styles/components/AboutContainer.module.css";
import medalImage from "../public/medal-front-color.png";

const MotiveContainer = () => {
    return (
        <div className={style.about_container}>
            <div className={style.about_text}>
                <h1 className={style.about_section}>Motive</h1>
                <p>
                This was built for be a one-stop shop to showcase 
                all my projects as I learn more and develop in the world of software development.  
                </p>
            </div>

        <div className={style.about_image}>
            <Image src={medalImage}></Image>
        </div>
        </div>
    )
}

export default MotiveContainer;