import React, { useState, useEffect } from 'react';

const ControlSearch = ({ searchText, onChangeSearch }) => {

    const [text, setText] = useState('');

    useEffect(() => {
        setText(searchText)
    }, [searchText])

    const handleChangeSearchText = (e) => {
        setText(e.target.value);
        onChangeSearch && typeof onChangeSearch === 'function' 
            && onChangeSearch(e.target.value)
    }

    const handleClear = () => {
        onChangeSearch && typeof onChangeSearch === 'function' 
        && onChangeSearch('')
    }

    return (
        <div className="col-12">
            <div className="input-group">
                <input
                    type="text"
                    value={text}
                    onChange={handleChangeSearchText}
                    className="form-control"
                    placeholder="Search for..."
                />
                <span className="input-group-append">
                    <button onClick={handleClear} className="btn btn-info" type="button">Clear!</button>
                </span>
            </div>
        </div>
    );
};

export default ControlSearch;