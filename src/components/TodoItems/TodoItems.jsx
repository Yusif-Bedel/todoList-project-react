

import React from 'react';
import "./TodoItems.css";

const TodoItems = ({ text, completed, onToggleCompleted ,style}) => {
  return (
    <>
      <div className={style}>
        <label class="control control-checkbox">
                <input type="checkbox" 
                  className='TodoCheckbox'
                  checked={completed}
                  onChange={onToggleCompleted}
                 />
            <div class="control_indicator"></div>
            <span>{text}</span> 
        </label>
      </div>
    </>
  );
};

export default TodoItems;






