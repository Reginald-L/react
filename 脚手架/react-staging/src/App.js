import React, {Component} from 'react'
import Hello from './components/Hello/Hello.js'
import Welcome from './components/Welcome/Welcome.js'

export class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
