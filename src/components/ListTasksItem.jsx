import React from 'react';
import { TASK_LEVEL } from '../constants';

const ListTasksItem = ({task, index}) => {

    const {name, level} = task;

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{ task && name}</td>
            <td className="text-center"><span className={`badge ${TASK_LEVEL[level].class}`}>{TASK_LEVEL[level].name}</span></td>
            <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
         </tr>
    );
};

export default ListTasksItem;