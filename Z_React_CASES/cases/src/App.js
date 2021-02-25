import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    //初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', isDown: true},
            {id: '002', name: '睡觉', isDown: true},
            {id: '003', name: '编码', isDown: false}
        ]
    }

    updateState = (todoObj) => {
        const oldTodos = this.state.todos
        // const newTodo = {id: '004', name: todoObj, isDown: false}
        this.setState({todos: [todoObj, ...oldTodos]})
    }

    render() {
        return (
            <div className="box">
               <Header updateState={this.updateState}/>
               <List todos={this.state.todos}/>
               <Footer />
            </div>
        )
    }
}
