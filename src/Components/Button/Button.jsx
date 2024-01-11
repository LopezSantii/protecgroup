import style from "./Button.module.css"

export default function Button({funcion, content,clase}) {
    return (
        <button onClick={funcion} className={`${clase} ${style.button}`}>{content}</button>
    )
}
