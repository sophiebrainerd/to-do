import React from 'react';
import {Component} from 'react';
import {useState} from 'react';

const Input = props => {
    const {list, setlist} = props;
    let task = {
        name: "",
        iscomplete: false
    };

    const onchange = (e) => {
        task.name = e.target.value
    };

    const onclick = (e) => {
        setlist([...list, task]);
        e.target.value = "";
        task = "";
    };

    return(

        <div className="container">
            <input className="form-control" type="text" name="task" onchange={onchange}/>
            <button className="btn btn-primary" onclick={onclick}>Add Task</button>
        </div>

    )
}

export default Input;