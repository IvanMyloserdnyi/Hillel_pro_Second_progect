import s from './Converter.module.css'
import {useState, useEffect} from 'react';
import {CurrencyArea} from "./CurrencyArea";
import {CustomCalendar} from "./CustomCalendar";
import arrowsImg from '../../../images/main/converter/arrows.svg';
import {History} from "./History";

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

    function getFormattedCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    const [rates, setRates] = useState([])
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('UAH');
    const [currencyTo, setCurrencyTo] = useState('UAH');

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRates(data))
            .catch((error) => console.error('Error fetching rates:', error));
    }, []);

    function getCurrentRate(rates, currency) {
        return rates.find((rate) => rate.cc === currency).rate
    }

    function currencyFromConvert(evt) {
        //const currency = evt.target.value;
        setCurrencyFrom('UAH') //апи только с гривной в базе
    }

    function currencyToConvert(evt) {
        /*        debugger*/
        const currency = evt.target.value;
        setCurrencyTo(currency)

        const rate = currencyFrom === currency ? 1 : getCurrentRate(rates, currency)//currencyTo? 1 : getCurrentRate(rates,currencyTo)
        setValueTo((valueFrom / rate).toFixed(2))
    }

    function valueFromConvert(evt) {
        const rate = currencyFrom === currencyTo ? 1 : getCurrentRate(rates, currencyTo)
        const value = +evt.target.value;
        setValueFrom(value);
        setValueTo((value / rate).toFixed(2))
    }

    function valueToConvert(evt) {
        const rate = currencyFrom === currencyTo ? 1 : getCurrentRate(rates, currencyTo)
        const value = +evt.target.value;
        setValueTo(value);
        setValueFrom((value * rate).toFixed(2))
    }

    const [historyExchangeData, setHistoryExchangeData] = useState([])

    function saveExchange() {
        const date = getFormattedCurrentDate()
        const newDataItem = {
            date: date,
            changeFrom: `${valueFrom} ${currencyFrom}`,
            changeTo: `${valueTo} ${currencyTo}`,
        };
        const previousHistoryData = [...historyExchangeData];
        const updatedHistoryData = [...previousHistoryData, newDataItem];
        if (updatedHistoryData.length === 11) {
            updatedHistoryData.shift();
        }
        setHistoryExchangeData(updatedHistoryData);
    }

    function deleteHistoryData() {
        setHistoryExchangeData([])
    }

    return (
        <div>
            <div className={s.converter}>
                <div className={s.converter_container}>
                    <div className={s.converter_wrapper}>
                        <h2>Конвертер валют</h2>
                        <div className={s.converter_content}>
                            <CurrencyArea
                                valueHandler={valueFrom}
                                inputHandler={valueFromConvert}
                                currencyHendler={currencyFrom}
                                currencyConvert={currencyFromConvert}
                                data={data.firstCurrency}
                            />
                            <img src={arrowsImg} className={s.arrows} alt="стрілочки"/>
                            <CurrencyArea
                                valueHandler={valueTo}
                                inputHandler={valueToConvert}
                                currencyHendler={currencyTo}
                                currencyConvert={currencyToConvert}
                                data={data.secondCurrency}
                            />
                        </div>
                        <div className={s.custom_calendar_area}>
                            <div className={s.custom_calendar_wrapper}>
                                <CustomCalendar currentDate={getFormattedCurrentDate()}/>
                            </div>
                            <div>
                                <button onClick={saveExchange}><span>Зберегти результат</span>></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <History data={historyExchangeData} deleteData={deleteHistoryData}/>
        </div>
    )
}

