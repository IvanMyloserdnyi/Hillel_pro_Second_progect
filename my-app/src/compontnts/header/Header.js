import s from './Header.module.css'
import {Nav} from "../../share/nav/Nav";
import {Logo} from "../../share/logo/Logo";
import {Login} from "./Login";
import loginImage from '../../images/header/headerLogIn.svg'

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <Logo aboutContent = ''/>
                <Nav direction = {'row'}/>
                <Login image ={loginImage}/>
            </div>
        </div>
    )
}
