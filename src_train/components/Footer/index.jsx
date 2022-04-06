import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleAlldone=(event)=>{
        this.props.alldoneTodo(event.target.checked)
    }
    handleCleardone=()=>{
        alert('確認刪除所選項目嗎?')
        this.props.cleardoneTodo()
    }
    render() {
        const {todos}=this.props
        const doneCount=todos.filter((todo=>todo.done === true),0).length
        /* const doneCount=todos.reduce((pre,todo) => pre+(todo.done ? 1:0),0) */
        const total=todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleAlldone} checked={doneCount===total? true:false}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleCleardone}>刪除已選中項目</button>
            </div>
        )
    }
}
