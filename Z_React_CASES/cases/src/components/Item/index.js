import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
    state = {mouse: false}
    itemRef = React.createRef();

    handleMouseEvent = (flag)=>{
        this.setState({mouse: flag})
    }
    render() {
        const {name, isDown} = this.props
        const {mouse} = this.state
        return (    
            <li ref="item" style={{backgroundColor: mouse? '#ddd' : 'white'}} className="items" onMouseEnter={() => this.handleMouseEvent(true)} onMouseLeave={() => this.handleMouseEvent(false)}>
            {/* <li className="items"> */}
                <label>
                    <input type="checkbox" defaultChecked={isDown}/>
                    <span>{name}</span>
                    <button  style={{display: mouse ? 'block' : 'none'}} onClick={()=>{console.log('aaa'); this.refs.itemRef.display = 'none'}}>删除</button>
                    {/* <button>删除</button> */}
                </label>
            </li>
        )
    }
}
