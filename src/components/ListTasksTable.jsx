import React from 'react';

import ListTasksItem from './ListTasksItem';

const ListTasksTable = ({listTasks}) => {

    const renderTaskItems = () => {
        return listTasks && listTasks.length > 0 && 
            listTasks.map((task, index) => {
                return <ListTasksItem key={task.id} task={task} index={index} />
            })
    }

    return (
        <div className="panel panel-success">
        {/* <div className="panel-heading">List Task</div> */}
        <table className="table table-hover ">
            <thead>
                <tr>
                    <th style={{width:"10%"}} className="text-center">#</th>
                    <th>Task</th>
                    <th style={{width:"20%"}} className="text-center">Level</th>
                    <th style={{width:"160px"}}>Action</th>
                </tr>
            </thead>

            <tbody>
              {renderTaskItems()}
            </tbody>

        </table>
    </div>
    );
};

export default ListTasksTable;