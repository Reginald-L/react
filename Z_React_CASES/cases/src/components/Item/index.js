import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
    render() {
        return (
            <li className="items">
                <label>
                    <input type="checkbox" name="" id="" />
                    <span>xxxxx</span>
                    <button style={{display: 'none'}}>删除</button>
                </label>
            </li>
        )
    }
}
