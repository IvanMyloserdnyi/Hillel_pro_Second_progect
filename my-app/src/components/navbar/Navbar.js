import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const navData = [
    { content: 'Завдання 1', path: '/task_1' },
    { content: 'Завдання 2', path: '/task_2' },
    { content: 'Завдання 3', path: '/task_3' }
]

export function Navbar() {
    return (
        <div className={classes.navbar}>
            {navData.map((obj) => (
                <div key={obj.path} className={classes.item}>
                    <NavLink to={obj.path} className = { navContent => navContent.isActive ? classes.activeLink : classes.item }>{obj.content}</NavLink>
                </div>
            ))}
        </div>
    )
}