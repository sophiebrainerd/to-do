import React from 'react';
import {Component} from 'react';
import {useState} from 'react';

const Task = props => {
    const {task, setlist} = props;

    return(
        <div className="container">
            <h4>{task.name}</h4>
            <label id="checkbox" name="checkbox">Completed?</label>
            <input type="checkbox" name="checkbox"/>
        </div>
    )
}
