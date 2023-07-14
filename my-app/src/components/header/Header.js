import classes from './Header.module.css'
export function Header() {
    return (
        <div className={classes.header}>
            <img  src='https://www.freeiconspng.com/uploads/goose-png-27.png' alt='gussi'/>
            <p className={classes.label}>GUSSI GANG</p>
        </div>
    )
}
