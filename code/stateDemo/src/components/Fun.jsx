import React, { useState } from 'react'

function Fun() {
        const [na, setNa] = useState("prasad")
        const [count, setCount] = useState(0)
        const [length, setLength] = useState(0)

        const handleClick = () => {
            setNa( (na) => na + "raj")
        }

        const handleChange = (l) => {
            setLength(l.length)
        }

        
        return (
            <div>
                <p>Name : {na}</p>
                <p>No of Characters : {length}</p>
                <input>
                    type = 'text'
                    onChange = { (e)=> handleChange(e.target.value)} 
                </input>

                <p>Count : {count}</p>
                <button onClick={ () => setCount(count+1)}>+</button>
                <button onClick={ () => setCount(count-1)}>-</button>
                <button onClick={ () => setCount(0)}>reset</button>
                <button onClick={ handleClick }>Click me</button>

            </div>
         )
}

export default Fun
