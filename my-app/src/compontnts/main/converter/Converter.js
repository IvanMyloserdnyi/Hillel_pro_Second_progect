import s from './Converter.module.css'
import {useState} from 'react';
import {CurrencyArea} from "./CurrencyArea";

const data = {
    firstCurrency: {
        position: 'left',
        content: 'В мене є:'
    },
    secondCurrency: {
        position: 'right',
        content: 'Хочу придбати:'
    }
}

export function Converter() {
    const rate = 0.1;
    const [currencyFrom,setCurrencyFrom] = useState(0);
    const [currencyTo, setCurrencyTo] = useState(0);
    function currencyFromConvert(evt) {
        const value = +evt.target.value;
        setCurrencyFrom(value);
        setCurrencyTo(value*rate)
    }
    function currencyToConvert(evt) {
        const value = +evt.target.value;
        setCurrencyTo(value);
        setCurrencyFrom(value/rate)
    }
    return (
        <div className={s.converter}>
            <div className={s.converter_container}>
                <div className={s.converter_wrapper}>
                    <h2>Конвертер валют</h2>
                    <div className={s.converter_content}>
                        <CurrencyArea
                            currencyValue = {currencyFrom}
                            inputHandler = {currencyFromConvert}
                            data = {data.firstCurrency}
                        />
                        <CurrencyArea
                            currencyValue = {currencyTo}
                            inputHandler = {currencyToConvert}
                            data = {data.secondCurrency}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

