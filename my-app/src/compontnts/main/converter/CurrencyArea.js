import s from "./Converter.module.css";

export function CurrencyArea({currencyValue,inputHandler,data}) {
    const position = data.position;
    const content = data.content;
    return (
        <div className={s[position]}>
            <h3>{content}</h3>
            <div>
                <input type="number" value={currencyValue} onChange={inputHandler}/>
                <select>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                </select>
            </div>
        </div>
    )
}
