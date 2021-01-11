import React, {useReducer} from 'react';

const todos = [
    {
        title: 'Get milk',
        completed: true,
    },
    {
        title: 'Make YouTube video',
        completed: false,
    },
    {
        title: 'Write blog post',
        completed: false,
    },
];

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
    todos,
};

const loginReducer = (state, action) => {
    console.log('loginReducer');
    switch (action.type) {
        case 'field': {
            /* const newState = {...state};
            newState[action.fieldName] = action.payload; */
            return {...state, [action.fieldName]: action.payload}
        }
        case 'login': {
            return { ...state, eror: '', isLoading: true }
        }
        case 'success': {
            return { ...state, isLoggedIn: true, isLoading: false, username: '', password: '' }
        }
        case 'error': {
            return {
                ...state, error: 'Incorrect username or password!', isLoggedIn: false,
                isLoading: false, username: '', password: ''
            }
        }
        case 'logOut': {
            return { ...state, isLoggedIn: false }
        }
        case 'toggleTodoCompleted': {
            const todos = JSON.parse(JSON.stringify(state.todos));
            const newTodos = todos.map((item) => {
                if(item.title === action.payload) item.completed = !item.completed
                return item;
            });
            return { ...state, todos: newTodos};
        }
        default:
            return;
    }
}

export const StateLoginContext = React.createContext();
export const DispatchLoginContext = React.createContext();

export const LoginContext = (props) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    return (
        <DispatchLoginContext.Provider value={dispatch}>
            <StateLoginContext.Provider value={state}>
                {props.children}
            </StateLoginContext.Provider>
        </DispatchLoginContext.Provider>
    );
}

export default LoginContext;