import style from "../styles/components/DetailsContainer.module.css";
import ImageSlider from "./ImageSlider";
import { MdClose } from "react-icons/md";
import { projects } from "./ProjectContainer";
import Image from "next/image";
import Link from "next/link";


const DetailsContainer = (props) => {
    const result = projects.find((project) => props.project === project.id);

    const {title, content, moreImages} = result;


    let imageItems = moreImages.map((image) => {
        return (
            <Image
            src={image}
            layout="fill"
            objectFit="contain" />
        )
    });

    return (
        <div className={style.details_container}>
            <div>
                <Link href="/">
                    <a><MdClose className={style.close_button}/></a>
                </Link>
            </div>

            <div className={style.carousel_container}>
                <ImageSlider items={imageItems} />
            </div>

            <div className={style.details_text}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default DetailsContainer;