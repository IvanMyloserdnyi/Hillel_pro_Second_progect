import s from './Footer.module.css'
import {Nav} from "../../share/nav/Nav";
import {Logo} from "../../share/logo/Logo";
import {Phone} from "./Phone";
import smartphoneImage from '../../images/footer/phone_image.svg'
import oldPhoneImage from '../../images/footer/old_phone_image.svg'
import socialsImage from '../../images/footer/socials_pictures.svg'
const data = {
    logoAbout: {
        content:'04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж, 2019-2023'
    },
    phoneSmart: {
        image: smartphoneImage,
        phoneNumber: '3773',
        description: 'Цілодобова підтримка'
    },
    phoneOld: {
        image: oldPhoneImage,
        phoneNumber: '8 800 111 22 33',
        description: 'Безкожтовно для дзвінків в межах України'
    }
}
export function Footer() {
    return (
        <div className={s.footer}>
            <Logo aboutContent = {data.logoAbout.content}/>
            <Nav direction = 'column'/>
            <Phone data = {data.phoneSmart}/>
            <Phone data = {data.phoneOld}/>
            <section className={s.footer_socials}>
                <img src={socialsImage} alt="socials"/>
{/*             <a href="#"><img src="" alt="facebook"/></a>
                <a href="#"><img src="" alt="instagram"/></a>
                <a href="#"><img src="" alt="twitter"/></a>
                <a href="#"><img src="" alt="youtube"/></a>*/}
            </section>
        </div>
    )
}

