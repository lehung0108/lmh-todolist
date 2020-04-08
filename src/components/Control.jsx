import React from 'react';

import ControlSearch from './ControlSearch';
import ControlSort from './ControlSort';
import ControlAddNew from './ControlAddNew';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Control = ({ onChangeSearch, searchText, onSelectSort, orderBy, orderDir, handleAddNewTask }) => {


    return (
        <Row>
			<Col xs={12} lg={6}>
				<Row>
                    <ControlSort
                        onSelectSort={onSelectSort} 
                        orderBy={orderBy} 
                        orderDir={orderDir} 
					/>
					<ControlSearch searchText={searchText} onChangeSearch={onChangeSearch}/>
				</Row>
			</Col>

			<Col xs={12} lg={6}>
				<ControlAddNew handleAddNewTask={handleAddNewTask}/>
			</Col>
		</Row>
    );
};

export default Control;