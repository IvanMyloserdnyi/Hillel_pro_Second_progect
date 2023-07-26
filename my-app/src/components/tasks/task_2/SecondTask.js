import classes from './SecondTask.module.css'
import {useState} from "react";



export function ToDoList() {
    const [tasks, setTasks] = useState([
        {id: 1, task: 'Task1',status: false},
        {id: 2, task: 'Task2',status: false},
        {id: 3, task: 'Task3',status: false}
    ])
    const [input,setInput] = useState('')
    function addTask(evt) {
        evt.preventDefault()
        if(input.length){
            setTasks([...tasks,{id:Date.now(), task:input, status: false}])
            setInput('')
        }
    }
    function removeTask(id) {
        setTasks(tasks.filter((task) => task.id !==id))
    }
    function changeTaskStatus(index) {
        const changedTasks = [...tasks];
        changedTasks[index].status = !changedTasks[index].status
        setTasks(changedTasks)
        console.log(tasks)
    }
    return (
        <div>
            <div>
                {tasks.map((obj) => (
                    <div key={obj.id} className={classes.task}>
                        <input type={"checkbox"} onClick={() => changeTaskStatus(tasks.indexOf(obj))}></input>
                        <div style={
                            {background: obj.status === true ? 'green' : null}
                        }>  {obj.task}
                            <button onClick={() => removeTask(obj.id)}>x</button></div>

                    </div>
                ))}
            </div>
            <form onSubmit={(evt) => addTask(evt)}>
                <input
                    type="text"
                    placeholder="Введіть справу..."
                    value={input}
                    onChange={(evt) => setInput(evt.target.value)}
                />
                <button>Додати</button>
            </form>
        </div>
    );
}