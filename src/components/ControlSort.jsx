import React from 'react';

import { SORT } from '../constants';

import Dropdown from 'react-bootstrap/Dropdown'

const DropdownMenu = Dropdown.Menu;
const DropdownToggle = Dropdown.Toggle;
const DropdownItem = Dropdown.Item;

const ControlSort = ({onSelectSort, orderBy, orderDir}) => {

    const onSelectDropdown = (eventKey, ) => {
        
        let [orderBy, orderDir] = eventKey.split('-');

        onSelectSort && typeof onSelectSort === 'function' 
            && onSelectSort(orderBy, orderDir);
    }

    return (
        <div className="col-12">
            <div className="form-group">
                    <Dropdown onSelect={onSelectDropdown}>
                        <DropdownToggle variant="secondary" id="dropdown-basic">
                            Sort by
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                SORT.map(o => {
                                return <DropdownItem 
                                            key={o.key}
                                            eventKey={o.key} 
                                            active={`${orderBy}-${orderDir}` === o.key}>
                                            {o.text}
                                        </DropdownItem>
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <span className="badge badge-success badge-medium">{orderBy} - {orderDir}</span>
            </div>
        </div>
    );
};

export default ControlSort;