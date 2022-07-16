import Image from "next/image";
import style from "../styles/components/IntroContainer.module.css"
import IntroImage from "../public/fav-folder-front-color.png";
import IntroButton from "./IntroButton";

const IntroContainer = (props) => {

    return (
        <div className={style.intro_container}>
            <div className={style.intro_description}>
                <div className={style.intro_text}>
                    <h1 className={style.text}>
                        Check some of my
                        <br/>
                        <b className={style.bold}>Mini Ventures</b>
                    </h1>
                </div>
                <IntroButton do={props.do}/>
            </div>

            <div className={style.image_container}>
                <Image src={IntroImage} alt="Image of Starred Folder"></Image>
            </div>

        </div>
    )
}


export default IntroContainer;