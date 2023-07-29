import s from './Logo.module.css'
import logoImage from '../../images/share/logo.svg'
export function Logo(props) {
    const aboutContent = props.aboutContent
    return (
        <div className={s.logo}>
            <div>
                <img src={logoImage} alt="logo"/>
                <h2>Чіп Чендж</h2>
            </div>
            {aboutContent && <About content ={aboutContent}/>}
        </div>
    )
}

function About(props) {
    const content = props.content
    return (
        <div className={s.about}>
            <p>{content}</p>
        </div>
    )
}