import React, { useContext } from 'react';
import { DispatchLoginContext, StateLoginContext } from '../../context/Login';

const TodoItem = ({ title, completed }) => {

    const dispatch = useContext(DispatchLoginContext);
    const state = useContext(StateLoginContext);

    const { isLoggedIn } = state;

    return (
        <div className='todoItem'>
            <p>{title}</p>
            <div>
                <input
                    type='checkbox'
                    checked={completed}
                    defaultValue={completed}
                    onClick={() => {
                        if (!isLoggedIn) {
                            alert('Please login to click this!');
                        }
                    }}
                    onChange={(e) => {
                        if (isLoggedIn) {
                            dispatch({ type: 'toggleTodoCompleted', payload: title });
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default TodoItem;