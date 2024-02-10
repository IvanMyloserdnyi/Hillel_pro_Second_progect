import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";
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
