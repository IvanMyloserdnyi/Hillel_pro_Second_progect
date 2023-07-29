import s from './Main.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {Converter} from "./converter/Converter";
import topImage from '../../images/main/main_top_image.png'
import bottomImage from '../../images/main/main_bottom_image.png'
export function Main() {
    return (
        <div className={s.main}>
            <div className={s.main_wrapper}>
                <section className={s.main_top_wrapper}>
                    <div className={s.main_top_description}>
                        <h2>Чіп Чендж</h2>
                        <p>Обмінник валют - навчальний</p>
                        <NavLink to='/converter/*'
                                 className={s.main_top_description_button}><span>Конвертер валют</span></NavLink>
                    </div>
                    <div className={s.main_top_img_area}>
                        <img src={topImage} alt="фотографія банківської картки"/>
                    </div>
                </section>
                <section className={s.main_bottom_wrapper}>
                    <div className={s.main_bottom_description}>
                        <h2>Конвертер валют</h2>
                        <p>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і
                            більше відсотків.</p>
                        <NavLink to='/converter/*' className={s.main_bottom_description_button}><span>Конвертувати валюту</span></NavLink>
                    </div>
                    <div className={s.main_bottom_img_area}>
                        <img src={bottomImage} alt="фотографія банківської картки"/>
                    </div>
                </section>
                <section>
                    <Routes>
                        <Route path="/converter/*" element={<Converter/>}/>
                    </Routes>
                </section>
            </div>
        </div>
    )
}

