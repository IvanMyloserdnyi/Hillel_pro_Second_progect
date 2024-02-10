import s from './Footer.module.css'
import {Nav} from "../../share/nav/Nav";
import {Logo} from "../../share/logo/Logo";
import {Phone} from "./Phone";
import {Socials} from "./Socials";
import smartphoneImage from '../../images/footer/phone_image.svg';
import oldPhoneImage from '../../images/footer/old_phone_image.svg';
import facebookImage from '../../images/footer/socials_facebook.svg';
import instagramImage from '../../images/footer/socials_instagram.svg';
import twitterImage from '../../images/footer/socials_twitter.svg';
import youtubeImage from '../../images/footer/socials_youtube.svg';
const data = {
    phone: {
        phoneSmart: {
            image: smartphoneImage,
            phoneNumber: '3773',
            description: 'Цілодобова підтримка'
        },
        phoneOld: {
            image: oldPhoneImage,
            phoneNumber: '8 800 111 22 33',
            description: 'Безкоштовно для дзвінків в межах України'
        }
    },
    logoAbout: {
        content:'04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж, 2019-2023'
    },
    socials: [facebookImage,instagramImage,twitterImage,youtubeImage]
}
export function Footer() {
    return (
        <div className={s.footer}>
            <Logo aboutContent = {data.logoAbout.content}/>
            <Nav direction = 'column'/>
            <Phone data = {data.phone.phoneSmart}/>
            <Phone data = {data.phone.phoneOld}/>
            <Socials socialsImages = {data.socials}/>
        </div>
    )
}



