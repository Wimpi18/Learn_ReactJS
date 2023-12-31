import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/Task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    /* const changeState = (id) =>{
        console.log('TODO: Cambiar estado de una tarea')
    } */

    return (
        <div>
            <div>
                <h1>Your tasks:</h1>

            </div>
            <TaskComponent task={defaultTask} otro="bonito"></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
