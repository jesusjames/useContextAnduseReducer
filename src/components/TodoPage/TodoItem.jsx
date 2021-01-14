import React from 'react';
import { useDispatchLoginContext, useStateLoginContext } from '../../context/Login';

const TodoItem = ({ title, completed }) => {

    const dispatch = useDispatchLoginContext()
    const state = useStateLoginContext();

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