import style from "../styles/components/IntroButton.module.css";

const IntroButton = (props) => {
    return (
        <button
        className={style.button}
        onClick={() => props.do()}>
            See More
        </button>
    )
}

export default IntroButton;