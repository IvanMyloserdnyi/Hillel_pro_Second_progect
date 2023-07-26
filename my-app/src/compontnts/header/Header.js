import s from './Header.module.css'
import {HeaderNav} from "./headerNav/HeaderNav";

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <section className={s.logo_section}>
                    <img src="/images/header/headerLogo.svg" alt="logo"/>
                    <p>Чіп Чендж</p>
                </section>
                <HeaderNav/>
                <section className={s.login_section}>
                    <img src="/images/header/headerLogIn.svg" alt="login"/>
                    <p>Особистий кабінет</p>
                </section>
            </div>
        </div>
    )
}