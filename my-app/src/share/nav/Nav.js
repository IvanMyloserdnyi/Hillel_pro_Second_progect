import s from './Nav.module.css'
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
export function Nav(props) {
    const direction = props.direction
    return (
        <div className={`${s.header_nav} ${s[direction]}`}>
            {headerNavContent.map((navContent)=>(
                <NavLink key={navContent.path} to={navContent.path} className = { navStyle => navStyle.isActive ? s.activeLink : null }>{navContent.content}</NavLink>
            ))}
        </div>
    )
}