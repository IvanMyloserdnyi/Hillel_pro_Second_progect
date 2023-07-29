import s from "./Header.module.css";

export function Login(props) {
    const image = props.image
    return (
        <div className={s.login_section}>
            <img src={image} alt="login"/>
            <p>Особистий кабінет</p>
        </div>
    )
}