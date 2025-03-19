
import React from 'react'
import { useState } from 'react'

function Fun() {
    const [na, setNa] = useState("prasad")
    const [count, setCount] = useState(0);
    const [length, setLength] = useState(0)

    const handleClick = () => {
        setNa( (na) => na + "raj" );
    }

    const handleChange = (l) => {
        setLength(length.length);
    }

    // const cnt = () => {
    //     setCount (count+1)
    // }

    return (
        <div>
                <p>Name : {na}</p>

                <input
				type='text'
				onChange={(e) => handleChange(e.target.value)}
			    />
			    <p>count:{count}</p>
			
                <button onClick={()=> setCount(count+1 )}>+</button> &nbsp;
                <button onClick={ ()=> setCount(count-1) }>-</button> &nbsp;
                <button onClick={ ()=> setCount(0) }>Reset</button> &nbsp;
                <button onClick={handleClick}>Click me</button>

        </div>

    )
}

export default Fun
