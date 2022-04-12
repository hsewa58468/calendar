import React from 'react'
import './index.css'
import data1 from './json/data1.json'
const {useState}=React
var moment = require('moment');
let calendarDates =  [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}]
]

export default function Hook_index (){
    const[whitch_Month_Has_choose,set_whitch_Month_Has_choose]=useState(5)
    const[whitch_Day_Has_border,set_whitch_Day_Has_border]=useState(0) //第幾個index物件該有border
    const ChooseMonth =(targetMonth) =>{
        set_whitch_Month_Has_choose(targetMonth)
    }
    const BackArrowMonth =() =>{
        if(whitch_Month_Has_choose<=5){
            set_whitch_Month_Has_choose(whitch_Month_Has_choose)
        }else{
            set_whitch_Month_Has_choose(whitch_Month_Has_choose-1)
        }
    }
    const ForwardArrowMonth =() =>{
        if(whitch_Month_Has_choose>=7){
            set_whitch_Month_Has_choose(whitch_Month_Has_choose)
        }else{
            set_whitch_Month_Has_choose(whitch_Month_Has_choose+1)
        }
    }
    const addDayBorder =(index) =>{
        set_whitch_Day_Has_border(index)
    }

    const returnDatesJSX = (year,month)=>{
        const otherMonthDay=new Date(year,month-1,1).getDay()
        const overMonthDay=32 - new Date(year, month-1, 32).getDate()
        
        const dates = calendarDates.map((weekArray,weekIndex)=>{
            return (
                <tr className={` days table_width ${whitch_Month_Has_choose===month? 'chooseMonth' : 'otherMonth'}`} >
                    {
                        weekArray.map((day,dayIndex)=>{
                            const targetIndex = weekIndex*7 + dayIndex
                            if(targetIndex<otherMonthDay || targetIndex>overMonthDay ){
                                return(
                                    <td key={targetIndex} className="otherMonthDay">
                                        <div className='day'></div>
                                    </td>
                            )}
                            
                            else{   
                                const newdata=data1.filter(function(item){
                                    return item.date === moment([year,month-1,targetIndex]).format("YYYY/MM/DD");    
                                }) 
                                if(newdata[0]==undefined){
                                    return(
                                        <td key={targetIndex} className='currentDays'>
                                            <div className='day'>{targetIndex-otherMonthDay+1}</div>
                                        </td>
                                )}
                                else{
                                    const target=newdata[newdata.length-1]
                                    return(
                                        <td key={targetIndex} className={`currentDays ${whitch_Day_Has_border===targetIndex? 'border' : ''}`} onClick={()=>addDayBorder(targetIndex)}>
                                            <div className='day'>
                                                <span className='dayNum'>{targetIndex-otherMonthDay+1}</span>
                                                <span className={`onschedule ${target.availableVancancy>target.totalVacnacy?'nonschedule':'onschedule'}`}>成團</span>
                                            </div>
                                            
                                            <div className='details'>
                                                <span className='status'>{target.status}</span>
                                                
                                                <br />
                                                <span className='sell'>餘位:
                                                    <i className='js_sell'>{target.availableVancancy}</i>
                                                </span>
                                                <span className='group'>團位:
                                                    <i className='js_group'>{target.totalVacnacy}</i>
                                                </span>
                                                <span className='price'>${target.price}</span>
                                            </div>
                                        </td> 
                                )}
                            }
                        })
                    }
                </tr>
            )
        })
        return dates
    }

    return (
        <div className="calendars"> 
            <div className="calendars_tabWrap">
                <a href="#" className="prev on" onClick={()=>BackArrowMonth()}></a>
                <ul className="ntb_tab">
                <li className="tab">
                    <a href="#" className={` ${whitch_Month_Has_choose===5? 'click' : ''}`} onClick={()=>ChooseMonth(5)}><span>2017 5月</span></a>
                </li>            
                <li className="tab">
                    <a href="#" className={` ${whitch_Month_Has_choose===6? 'click' : ''}`} onClick={()=>ChooseMonth(6)}><span>2017 6月</span></a>
                </li>
                <li className="tab">
                    <a href="#" className={` ${whitch_Month_Has_choose===7? 'click' : ''}`} onClick={()=>ChooseMonth(7)}><span>2017 7月</span></a>
                </li>                                                
                </ul>
                <a href="#" className="next on" onClick={()=>ForwardArrowMonth()}></a>
            </div>
            <div className="month">
                <div className='main'>
                    <table className='month_table'>
                        <thead>
                            <tr className='week table_width'>
                                <th>星期日</th>
                                <th>星期一</th>
                                <th>星期二</th>
                                <th>星期三</th>
                                <th>星期四</th>
                                <th>星期五</th>
                                <th>星期六</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnDatesJSX(2017,5)}
                            {returnDatesJSX(2017,6)}
                            {returnDatesJSX(2017,7)}
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

