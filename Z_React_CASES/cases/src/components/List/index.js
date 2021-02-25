import React, { Component } from 'react'
import Item from '../Item'
import './list.css'

export default class List extends Component {
    render() {
        const {todos} = this.props;
        return (
            <div className="list">
                <ul>
                    {
                        todos.map( todoItem  => {
                            return <Item key={todoItem.id} {...todoItem}/>
                        })
                    }
                    {/* <Item />
                    <Item />
                    <Item /> */}
                </ul>
            </div>
        )
    }
}
