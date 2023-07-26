import s from './HeaderNav.module.css'
import {NavLink} from "react-router-dom";

const headerNavContent =[
    {
        content:'Послуги',
        path:'/services/*'
    },
    {
        content:'Конвертер валют',
        path:'/converter/*'
    },
    {
        content:'Контакти',
        path:'/contacts/*'
    },
    {
        content:'Задати запитання',
        path:'/questions/*'
    }
    ]
export function HeaderNav() {
    return (
        <div className={s.header_nav}>
            {headerNavContent.map((navContent)=>(
                <NavLink key={navContent.path} to={navContent.path} className = { navStyle => navStyle.isActive ? s.activeLink : null }>{navContent.content}</NavLink>
            ))}

        </div>
    )
}