import {useState} from 'react';

export const Text = ()=> {
    const [text, setText] = useState('');
    return (
     <div>
        <input onChange={(e)=> {setText(e.target.value)}}></input>
        <h1>
            {text}
        </h1>
     </div>   
    )
}