import {useState} from 'react';

export const Exercise = () => {
    const [value, setValue] = useState(0);

    const increase = () => {
        setValue(value +1);
    }
    const decrease = () => {
        setValue(value -1);
    }
    const setZero = () => {
        setValue(0);
    }
    return ( 
    <div>
        <div style={{border:'solid'}}>
            <h1>Exercise counter</h1>
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={setZero}>Zero</button>
        </div>
    </div>
    )
}