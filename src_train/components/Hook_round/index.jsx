import React from 'react'
import './index.css'
const {useState}=React
export default function Hook_round () {
  const[count,set]=useState(0)
  
  const plusNum=()=>set(count+1)
  const minusNum=()=>set(count-1)
  const shadow = {
    boxShadow: '0 0 5px 5px #eaeaea',
    padding: 20, 
  }
  return (
    <div className='container' style={shadow}>
        <div className="container">
          {/* <!-- 向上箭頭 --> */}
          <div 
            className="chevron chevron-up" onClick={plusNum}
            style={{visibility:count>=10 && 'hidden'}}
          ></div>
          {/* <!-- 數字 --> */}
          <div className="number">
            {count}
          </div>
          {/* <!-- 向下箭頭 --> */}
          <div 
            className="chevron chevron-down" onClick={minusNum}
            style={{visibility:count<=0 && 'hidden'}}>
          </div>
        </div>
      </div>
  )
}
