import React, { Component } from 'react'
//这个nanoid是一个方法, 用的分别暴露的方式
import {nanoid} from 'nanoid'
import './header.css'

export default class Header extends Component {

    getTaskName = (event) => {
        // console.log(event.keyCode)
        const {keyCode, target} = event
        switch(keyCode){
            case 13:
                const {value} = target
                // 任务名不能为空
                if (value.trim() === ''){
                    alert('请输入任务名称')
                    break
                } 
                const todoObj = {id: nanoid(), name: value, isDown: false}
                this.props.updateState(todoObj)
                target.value = ''
                break
            default:
                break
        }
    }

    render() {
        return (
            <div className="header">
                <input onKeyUp={this.getTaskName} className="taskInput" type="text" placeholder="请输入你的任务名称, 按回车确认"/>
            </div>
        )
    }
}
