import s from './Footer.module.css'
import {NavLink} from "react-router-dom";

export function Footer() {
    return (
        <div className={s.footer}>
            <section className={s.footer_logo}>
                <div>
                    <img src="/images/footer/logo.svg" alt="logo"/>
                    <h2>Чіп Чендж</h2>
                </div>
                <p>04128, м.Київ, вул. Хрещатик, 19
                    Ліцензія НБУ №156
                    Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
            </section>
            <section className={s.footer_nav}>
                <NavLink to='/services/*'
                         className={navStyle => navStyle.isActive ? s.activeLink : null}>Послуги</NavLink>
                <NavLink to='/converter/*' className={navStyle => navStyle.isActive ? s.activeLink : null}>Конвертер
                    валют</NavLink>
                <NavLink to='/contacts/*'
                         className={navStyle => navStyle.isActive ? s.activeLink : null}>Контакти</NavLink>
                <NavLink to='/questions/*' className={navStyle => navStyle.isActive ? s.activeLink : null}>Задати
                    питання</NavLink>
            </section>
            <section className={s.footer_first_phone}>
                <img src="/images/footer/phone_image.svg" alt="картинка телефона,цілодобова підтримка"/>
                <a href="tel:3773">
                    <div className={s.footer_first_phone_number}>
                        <h5>3773</h5>
                        <p>Цілодобова підтримка</p>
                    </div>
                </a>
            </section>
            <section className={s.footer_second_phone}>
                    <img src="/images/footer/old_phone_image.svg" alt="картинка телефона,цілодобова підтримка"/>
                    <a href="tel:+8 800 111 22 33">
                        <div className={s.footer_second_phone_number}>
                            <h5>8 800 111 22 33</h5>
                            <p>Безкожтовно для дзвінків в межах України</p>
                        </div>
                    </a>
            </section>
            <section className={s.footer_socials}>
                <img src="/images/footer/socials_pictures.svg" alt="socials"/>
{/*             <a href="#"><img src="" alt="facebook"/></a>
                <a href="#"><img src="" alt="instagram"/></a>
                <a href="#"><img src="" alt="twitter"/></a>
                <a href="#"><img src="" alt="youtube"/></a>*/}
            </section>
        </div>
    )
}

