import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
    render() {
        const {name, isDown} = this.props
        return (    
            <li className="items">
                <label>
                    <input type="checkbox" defaultChecked={isDown}/>
                    <span>{name}</span>
                    <button style={{display: 'none'}}>删除</button>
                </label>
            </li>
        )
    }
}
