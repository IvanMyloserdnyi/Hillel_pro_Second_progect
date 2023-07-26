import s from './Converter.module.css'


export function Converter() {
    return (
        <div className={s.converter}>
            <div className={s.converter_container}>
                <div className={s.converter_wrapper}>
                    <h2>Конвертер валют</h2>
                    <div className={s.converter_content}>
                        <section className={s.convert_from}>
                            <h3>В мене є:</h3>
                            <div>
                                <input type="number"/>
                                <select className={s.convert_to}>
                                    <option value="UAH" selected>UAH</option>
                                    <option value="USD">USD</option>
                                    <option value="EURO">EURO</option>
                                </select>
                            </div>
                        </section>
                        <section>
                            <h3>Хочу придбати:</h3>
                            <div>
                                <input type="number"/>
                                <select>
                                    <option value="UAH">UAH</option>
                                    <option value="USD" selected>USD</option>
                                    <option value="EURO">EURO</option>
                                </select>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

