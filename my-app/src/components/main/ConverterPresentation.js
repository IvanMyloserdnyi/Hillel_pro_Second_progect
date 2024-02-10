import s from "./Main.module.css";
import bottomImage from "../../images/main/main_bottom_image.png";


export function ConverterPresentation(props) {
    const removeBottomSection = props.removeBottomSection
    return (
        <section className={s.main_bottom_wrapper}>
            <div className={s.main_bottom_description}>
                <h2>Конвертер валют</h2>
                <p>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
                <button className={s.main_bottom_description_button} onClick={removeBottomSection}>
                    <span>Конвертувати валюту</span>
                </button>
            </div>
            <div className={s.main_bottom_img_area}>
                <img src={bottomImage} alt="фотографія банківської картки" />
            </div>
        </section>
    )
}