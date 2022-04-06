import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import './index.css'

export default class Header extends Component {
  

  
  handleKeyup=(event)=>{
    const {keyCode,target} = event
    if(keyCode !== 13) return
    if(target.value.trim()== ' '){
      alert('不可空白')
      return
    }
    const todoObj={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    target.value=""
  }
  
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入備忘錄" />
      </div>
    )
  }
}
