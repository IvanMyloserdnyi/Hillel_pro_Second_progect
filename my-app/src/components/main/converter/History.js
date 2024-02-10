import s from "./Converter.module.css";
import arrowRightImage from '../../../images/main/converter/arrow_right.svg'


export function History(props) {
    const data = props.data
    const deleteData = props.deleteData

    return (
        <section className={s.history}>
            <section className={s.history_wrapper}>
                <article className={s.history_description}>
                    <h2>Історія конвертації</h2>
                    <button onClick={deleteData}><span>Очистити історію</span></button>
                </article>
                <article className={s.history_content}>
                    {data.map((obj) => (
                        <div key={data.indexOf(obj)} className={s.history_content__container}>
                            <div className={s.history_content__wrapper}>
                                <p className={s.history_content__date}>{obj.date}</p>
                                <p className={s.history_content__change_from}>{obj.changeFrom}</p>
                                <img src={arrowRightImage} alt="стрілочка"/>
                                <p className={s.history_content__change_to}>{obj.changeTo}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </section>
        </section>
    )
}
