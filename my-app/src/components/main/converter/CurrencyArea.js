import s from "./Converter.module.css";

export function CurrencyArea({convertedValueHandler,setValue,currencyHandler,setCurrencyHandler,data, isCurrensiesDisabled}) {

    const position = data.position;
    const content = data.content;
    return (
        <div className={s[position]}>
            <h3>{content}</h3>
            <div>
                <input type="number" className={s.input} value={convertedValueHandler}
                       onChange={(evt) => setValue(Number(evt.target.value))}/>
                <select className={s.select} value={currencyHandler}
                        onChange={(evt) => setCurrencyHandler(evt.target.value)}>
                    <option value="UAH">UAH</option>
                    <option disabled = {isCurrensiesDisabled} value="USD">USD</option>
                    <option disabled = {isCurrensiesDisabled} value="EUR">EUR</option>
                    <option disabled = {isCurrensiesDisabled} value="GBP">GBP</option>
                    <option disabled = {isCurrensiesDisabled} value="CNY">CNY</option>
                </select>
            </div>
        </div>
    )
}
