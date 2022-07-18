import { useEffect, useState } from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import style from "../styles/components/ImageSlider.module.css";

const ImageSlider = (props) => {
    const [index, setIndex] = useState(0);
    const currentImage = props.items[index];

    const prevItem = (list) => {
        if (index === 0) {
            setIndex((list.length -1));
        } else {
            setIndex(index - 1);
        }
    }

    const nextItem = (list) => {
        if (index === (list.length - 1)) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    useEffect(() => {
        currentImage = props.items[index];
    }, [index])

    return (
        <div className={style.image_slider}>
            <button
            onClick={() => prevItem(props.items)}
            className={style.button}>
                <MdChevronLeft className={style.progress_icon}/>
            </button>

            <div className={style.image_container}>
                {currentImage}
            </div>

            <button
            onClick={() => nextItem(props.items)}
            className={style.button}>
                <MdChevronRight className={style.progress_icon}/>
            </button>
        </div>
    )
}

export default ImageSlider;