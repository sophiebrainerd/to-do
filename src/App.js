import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Input from './components/input.js';
import Task from './components/task.js';

function App() {

    const [list, setlist] = useState([]);

    return (
        <div className="container">
            {list.map(task => (
                <Task tast={task} setlist={setlist}
            ))}
            <Input list={list} setlist={setlist}></Input>
        </div>
    );
}

export default App;
