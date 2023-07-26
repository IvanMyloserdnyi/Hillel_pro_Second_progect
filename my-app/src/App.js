import './App.css';
import './fonts.css';
import {Header} from "./compontnts/header/Header";
import {Footer} from "./compontnts/footer/Footer";
import {Main} from "./compontnts/main/Main";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app_wrapper'>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
