import s from "./Converter.module.css";

export function CurrencyArea({valueHandler,inputHandler,currencyHandler,currencyConvert,data}) {
    const position = data.position;
    const content = data.content;
    return (
        <div className={s[position]}>
            <h3>{content}</h3>
            <div>
                <input type="number" className={s.input} value={valueHandler} onChange={inputHandler}/>
                <select className={s.select} value={currencyHandler} onChange={(evt) => currencyConvert(evt)}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CNY">CNY</option>{/*// отрисовывать через меп*/}
                </select>
            </div>
        </div>
    )
}
