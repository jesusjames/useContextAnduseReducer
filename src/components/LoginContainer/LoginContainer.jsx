import React, { useContext } from 'react';
import { DispatchLoginContext, StateLoginContext } from '../../context/Login';
import { login } from './../../services/LoginService';
import { TodoPage } from './../TodoPage';

const LoginContainer = () => {

    const dispatch = useContext(DispatchLoginContext);
    const state = useContext(StateLoginContext);

    const { username, password, isLoading, error, isLoggedIn, todos } = state;

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch({ type: 'login' });

        try {
            await login({ username, password });
            dispatch({ type: 'success' });
        } catch (error) {
            dispatch({ type: 'error' });
        }
    };

    return (
        <div className='App useContext'>
            <div className='login-container'>
                {isLoggedIn ? (
                    <>
                        <h1>Welcome {username}!</h1>
                        <button onClick={() => dispatch({ type: 'logOut' })}>
                            Log Out
                                </button>
                    </>
                ) : (
                        <form className='form' onSubmit={onSubmit}>
                            {error && <p className='error'>{error}</p>}
                            <p>Please Login!</p>
                            <input
                                type='text'
                                placeholder='username'
                                value={username}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'field',
                                        fieldName: 'username',
                                        payload: e.currentTarget.value,
                                    })
                                }
                            />
                            <input
                                type='password'
                                placeholder='password'
                                autoComplete='new-password'
                                value={password}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'field',
                                        fieldName: 'password',
                                        payload: e.currentTarget.value,
                                    })
                                }
                            />
                            <button className='submit' type='submit' disabled={isLoading}>
                                {isLoading ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>
                    )}
            </div>
            <TodoPage todos={todos}/>
        </div>
    )
}

export default LoginContainer