import s from "./Footer.module.css";

export function Socials({socialsImages}) {
    return (
        <section className={s.footer_socials}>
            {socialsImages.map((image) => (
                <a key={socialsImages.indexOf(image)} href="#"><img src={image} alt="socials"/></a>
            ))}
        </section>
    )
}