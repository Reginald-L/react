import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <input className="taskInput" type="text" placeholder="请输入你的任务名称, 按回车确认"/>
            </div>
        )
    }
}
