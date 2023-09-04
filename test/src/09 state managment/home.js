import {useContext} from 'react';
import {AppContext} from './App.js';

export const Home = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>Hello {username} this is the homepage</h1>
        </div>
    )
}