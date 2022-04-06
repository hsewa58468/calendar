import React from 'react'
import './index.css'
const {useState}=React
export default function Netspeed() {
    const [pre,change]=useState(0)
    const MbB=()=>change(pre/10)

    return (
    <div className='container'>
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
            <div className="unit-control">
                <div className="unit">Mbps</div>
                <span className="exchange-icon fa-fw fa-stack">
                    <i className="far fa-circle fa-stack-2x" ></i>
                    <i className="fas fa-exchange-alt fa-stack-1x" ></i>
                </span>
                <div className="unit">MB/s</div>
            </div>
            <div className="converter">
                <div className="flex-1">
                    <div className="converter-title">Set</div>
                    <input type="number" value={pre} className="input-number"  min="0"/>
                </div>
                <span className="angle-icon fa-2x">
                    <i className="fas fa-angle-right" ></i>
                </span>
                <div className="text-right flex-1">
                    <div className="converter-title">Show</div>
                    <div className="input-number text-right" value={pre}></div>
                </div>
            </div>
        </div>
        <button className="card-footer" onClick={MbB}>FAST</button>
    </div>
  )
}
