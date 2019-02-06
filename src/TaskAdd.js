import React from 'react';

const TaskAdd = ({ value, changeHandler, clickHandler }) => {
    return (
        <form className="field has-addons">
            <div className="control is-expanded">
                <input className="input" value={value} onChange={changeHandler}></input>
            </div>
            <div className="control">
                <button className="button is-primary" onClick={clickHandler}>저장</button>
            </div>
        </form>
    )
}
export default TaskAdd