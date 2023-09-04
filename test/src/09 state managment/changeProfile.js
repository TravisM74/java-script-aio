import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from './App.js';

export const ChangeProfile = () => {
    const {setUsername} = useContext(AppContext);
    const [newUsername ,setNewUsername] = useState('');
    return(
        <div>
            <input onChange={(e) => {setNewUsername(e.target.value)}}></input>
            <button onClick={() =>{setUsername(newUsername)}}>change Username</button>
            <div>{newUsername}</div>
        </div>

    )
};