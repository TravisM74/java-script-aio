import {ChangeProfile} from './changeProfile.js';
import {useContext} from 'react';
import {AppContext} from './App.js';

export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <div>this is {username}'s Profile</div>
            <ChangeProfile  />
        </div>
    )
}