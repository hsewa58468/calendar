import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import Round from './components/Round'
import Hook_round from './components/Hook_round'
import Netspeed from './components/Netspeed'

export default class App extends Component {
    state={todos:[]}
    
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({todos:newTodos})
    }
    //更新todo在APP層的state狀態
    updateTodo=(id,done)=>{
        const {todos}=this.state
        const newTodos=todos.map((todoObj)=>{
            if(todoObj.id===id) return{...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    deleteTodo=(id)=>{
        const {todos}=this.state
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    alldoneTodo=(done)=>{
        const {todos}=this.state
        const newTodos=todos.map((todoObj)=>{
            return{...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    cleardoneTodo=()=>{
        const {todos}=this.state
        const newTodos=todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos}=this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} alldoneTodo={this.alldoneTodo} cleardoneTodo={this.cleardoneTodo}/>
                    <Round/>
                    <Hook_round/>
                    <Netspeed/>
                </div>
            </div>
        )
    }
    
}
