import s from './Main.module.css'
import {NavLink, Routes, Route} from "react-router-dom";
import {Converter} from "./converter/Converter";
import topImage from '../../images/main/main_top_image.png'
import {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import {ConverterPresentation} from "./ConverterPresentation";
export function Main() {
    const [showConverter, setShowConverter] = useState(false);
    const removeBottomSection = () => {
        setShowConverter(true);
    };
    const location = useLocation();
    useEffect(() => {
        setShowConverter(false);
    }, [location.pathname]);
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
                <Routes>
                    <Route path='/converter/*' element={
                        (showConverter ? (<Converter/>) : (<ConverterPresentation removeBottomSection = {removeBottomSection}/>))}/>
                </Routes>
            </div>
        </div>
    )
}