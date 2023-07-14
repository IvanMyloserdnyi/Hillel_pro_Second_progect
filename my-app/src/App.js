import './App.css'
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Main} from "./components/main/Main";

function App() {
  return (
    <div className='app'>
        <Header/>
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;
