import React, { useState } from 'react';
import Modal from './Modal';

import { v4 as uuidv4 } from 'uuid';


import {TASK_LEVEL} from '../constants/index'; 

const iniTask = {name: '', level: 0};

const ControlAddNew = ({handleAddNewTask}) => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [task, setTask] = useState(iniTask)

    const handleOnChange = (e, keyField) => {
        setTask({
            ...task,
            [keyField]: e.target.value
        })
    }

    const handleSubmit = () => {
       let data = {
           id: uuidv4(),
           ...task
       }
       handleAddNewTask(data);
       setIsOpenModal(false);
       setTask(iniTask);
    }



    return (
		<>
        <div className="form-group add-task">
            <button
                type="button"
                onClick={()=> setIsOpenModal(true)}
                className="btn btn-info btn-block">Add Task</button>
        </div>

        <Modal
            width={500}
            isVisible={isOpenModal} 
            title="Thêm mới tác vụ"
            renderFooter={() => {
                return (
                    <>
                        <button 
                            onClick={handleSubmit}
                            style={{marginRight: '10px'}} 
                            type="button" 
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={()=> setIsOpenModal(false)}
                            className="btn btn-secondary">Cancel</button>
                    </>
                )
            }}>

            <div className="form-group">
                <label className="sr-only"></label>
                <input
                    type="text"
                    value={task.name}
                    onChange={ e => handleOnChange(e, 'name')}
                    className="form-control"
                    placeholder="Task Name"/>
            </div>

            <div className="form-group">
                <label className="sr-only"></label>
                <select
                    value={task.level}
                    onChange={ e => handleOnChange(e, 'level')}
                    className="form-control"
                >
                    {
                        TASK_LEVEL.map((level, index) => <option key={index} value={index}>{level.name}</option>)
                    }
                </select>
            </div>

        </Modal>
        </>
    );
};

export default ControlAddNew;