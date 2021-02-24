import React, { Component } from 'react'
import Item from '../Item'
import './list.css'

export default class List extends Component {
    render() {
        return (
            <div className="list">
                <ul>
                    <Item />
                    <Item />
                    <Item />
                </ul>
            </div>
        )
    }
}
