
import { Component } from 'react'

export class Cls extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }

}

export default Cls