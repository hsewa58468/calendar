import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  state = {count:0}
  plusNum=(count)=>{
    const newCount=count+1
    this.setState({count:newCount})
  }
  minusNum=(count)=>{
    const newCount=count-1
    this.setState({count:newCount})
  }
  render() {
    const shadow = {
      boxShadow: '0 0 5px 5px #eaeaea',
      padding: 20, 
    }
    const {count} = this.state
    return (
      <div className='container' style={shadow}>
        <div className="container">
          {/* <!-- 向上箭頭 --> */}
          <div 
            className="chevron chevron-up" onClick={()=>this.plusNum(count)}
            style={{visibility:count>=10 && 'hidden'}}
          ></div>
          {/* <!-- 數字 --> */}
          <div className="number">
            {count}
          </div>
          {/* <!-- 向下箭頭 --> */}
          <div 
            className="chevron chevron-down" onClick={()=>this.minusNum(count)}
            style={{visibility:count<=0 && 'hidden'}}>
          </div>
        </div>
      </div>
    )
  }
}
