import './App.css'
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SmileVotes} from "./components/tasks/task1/FirstTask";
import {ToDoList} from "./components/tasks/task_2/SecondTask";
import {UsersList} from "./components/tasks/task_3/ThirdTask";

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                        <Route index path='/task_1' element={<SmileVotes/>}/>
                        <Route path='/task_2' element={<ToDoList/>}/>
                        <Route path='/task_3/*' element={<UsersList/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
