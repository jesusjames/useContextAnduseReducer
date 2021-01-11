import React from 'react';
import { TodoItem } from '.';

const TodoPage = ({ todos }) => {
    return (
        <div className='todoContainer'>
            <h2>Todos</h2>
            {todos.map((item) => (
                <TodoItem key={item.title} {...item} />
            ))}
        </div>
    );
}

export default TodoPage;