import s from './Converter.module.css'
import {useState, useEffect} from 'react';
import {CurrencyArea} from "./CurrencyArea";
import {CustomCalendar} from "./CustomCalendar";
import {History} from "./History";
import arrowsImg from '../../../images/main/converter/arrows.svg';
import {dateToNumber, getFormattedCurrentDate} from "../../../share/utils";

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
    const initialDate = getFormattedCurrentDate()
    const [rates, setRates] = useState([])
    const [valueFrom, setValueFrom] = useState(0);
    const [valueTo, setValueTo] = useState(0);
    const [convertedValueFrom, setConvertedValueFrom] = useState(0);
    const [convertedValueTo, setConvertedValueTo] = useState(0);
    const [currencyFrom, setCurrencyFrom] = useState('UAH');
    const [currencyTo, setCurrencyTo] = useState('UAH');

    const [historyExchangeData, setHistoryExchangeData] = useState([])
    const historyExchangeDataCount = 10
    const [selectedDate, setSelectedDate] = useState(initialDate);

    const formattedApiDate = selectedDate.split('-').join('')
    const urlWithDate =  `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${formattedApiDate}&json`

    const setValidDate = (e) => {
        const date = e.target.value
        const dateNumber = dateToNumber(date)
        const initialDateNumber = dateToNumber(initialDate)
        debugger
        if (dateNumber >= 20050101 && dateNumber <= initialDateNumber) {
            setSelectedDate(date)
        }
    }
    useEffect(() => {
        fetch(urlWithDate)
            .then((response) => response.json())
            .then((data) => setRates(data))
            .catch((error) => console.error('Error fetching rates:', error));
    }, [selectedDate]);
    function getCurrentRate(rates, currency) {
        return rates.find((rate) => rate.cc === currency).rate

    }

    useEffect(() => {
        const rate = currencyFrom === currencyTo ? 1 : getCurrentRate(rates, currencyFrom)
        setConvertedValueTo((valueFrom * rate).toFixed(2))
        setConvertedValueFrom(valueFrom)
        //debugger
    }, [valueFrom, currencyFrom, rates]);
    useEffect(() => {
        const rate = currencyFrom === currencyTo ? 1 : getCurrentRate(rates, currencyFrom)
        setConvertedValueFrom((valueTo / rate).toFixed(2))
        setConvertedValueTo(valueTo)
        //debugger
    }, [valueTo, currencyTo]);

/*    function currencyFromConvert(evt) {
        const currency = evt.target.value;

        setCurrencyTo(currency)
        const rate = currencyFrom === currency ? 1 : getCurrentRate(rates, currency)
        setValueTo((valueFrom * rate).toFixed(2))

    }
    function currencyToConvert(evt) {
        setCurrencyTo('UAH') //base in API have only UAH

    }
    function valueFromConvert(evt) {
        const rate = currencyFrom === currencyTo ? 1 : getCurrentRate(rates, currencyTo)
        const value = +evt.target.value;
        setValueFrom(value);
        setValueTo((value * rate).toFixed(2))

    }

    function valueToConvert(evt) {
        const rate = currencyFrom === currencyTo ? 1 : getCurrentRate(rates, currencyTo)
        const value = +evt.target.value;
        setValueTo(value); //
        setValueFrom((value / rate).toFixed(2))

    }*/


    function saveExchange() {
        const date = getFormattedCurrentDate()
        const newDataItem = {
            date: date,
            changeFrom: `${convertedValueFrom} ${currencyFrom}`,
            changeTo: `${convertedValueTo} ${currencyTo}`,
        };
        const previousHistoryData = [...historyExchangeData]

        if (previousHistoryData.length === historyExchangeDataCount) {
            previousHistoryData.pop();
        }
        const updatedHistoryData = [newDataItem,...previousHistoryData];
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
                                convertedValueHandler={convertedValueFrom}
                                setValue={setValueFrom}
                                currencyHandler={currencyFrom}
                                setCurrencyHandler={setCurrencyFrom}
                                isCurrensiesDisabled = {false}
                                data={data.firstCurrency}
                            />
                            <img src={arrowsImg} className={s.arrows} alt="стрілочки"/>
                            <CurrencyArea
                                convertedValueHandler={convertedValueTo}
                                setValue={setValueTo}
                                currencyHandler={currencyTo}
                                setCurrencyHandler={setCurrencyTo}
                                isCurrensiesDisabled = {true}
                                data={data.secondCurrency}
                            />
                        </div>
                        <div className={s.custom_calendar_area}>
                            <div className={s.custom_calendar_wrapper}>
                                <CustomCalendar currentDate={initialDate}
                                                selectedDate = {selectedDate}
                                                setValidDate = {setValidDate}/>
                            </div>
                            <div>
                                <button onClick={saveExchange}><span>Зберегти результат</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {historyExchangeData.length !== 0 && <History data={historyExchangeData} deleteData={deleteHistoryData}/>}
        </div>
    )
}

