import s from "./Footer.module.css";

export function Phone(props) {
    const image = props.data.image;
    const phoneNumber = props.data.phoneNumber
    const description = props.data.description
    return (
        <div className={s.phone}>
            <img src={image} alt="картинка телефона для олдів,цілодобова підтримка"/>
            <a href={`tel:+${phoneNumber}`}>
                <div className={s.phone_number}>
                    <h5>{phoneNumber}</h5>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}