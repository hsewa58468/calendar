import React from 'react'
import './index.css'
import data1 from './json/data1.json'
const {useState}=React
export default function Index (){
    const[active,setActive]=useState(false)
    const newdata = data1.filter(function(item, index, array){
        return item.date ==='2017/05/05'; 
      });
    const Change=()=>setActive(active=true)
    const ActiveClass = active ?"active day":"day"
    console.log(data1);
    return (
        <div className="calendars"> 
            <div className="calendars_tabWrap">
                <a href="#" className="prev on" ></a>
                <ul className="ntb_tab">
                <li className="tab">
                    <a href="#"><span>2017 5月</span></a>
                </li>            
                <li className="tab">
                    <a href="#" ><span>2017 6月</span></a>
                </li>
                <li className="tab">
                    <a href="#"><span>2017 7月</span></a>
                </li>                                                
                </ul>
                <a href="#" className="next on"></a>
            </div>
            <div className="month">
                <div className='main'>
                    <table className='month_table'>
                        <thread>
                            <tr className='week table_width'>
                                <th>星期日</th>
                                <th>星期一</th>
                                <th>星期二</th>
                                <th>星期三</th>
                                <th>星期四</th>
                                <th>星期五</th>
                                <th>星期六</th>
                            </tr>
                        </thread>

                        <tbody>
                            <tr className='days table_width'>
                                <td className='disabled'>
                                    <div className='day otherMonth'></div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/01">
                                    <div className='day'>
                                        <span className='num'>1</span>
                                        <div className='details'>
                                            <span className='status'><a href='#' className='more'>看更多團</a> </span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays ' date="2017/05/02">
                                    <div className='day'>
                                        <span className='num'>2</span>
                                    </div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/03">
                                    <div className='day'>
                                        <span className='num'>3</span>
                                        <div className='details'>
                                            <span className='status'>預定</span>
                                            <br />
                                            <span className='sell'>可賣:
                                                <i className='js_sell'>0</i>
                                            </span>
                                            <span className='group'>團位
                                                <i className='js_group'>20</i>
                                            </span>
                                            <span className='price'>$234,567</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/04">
                                    <div className='day'>
                                        <span className='num'>4</span>
                                        <div className='details'>
                                            <span className='status'><a href="" className='alternate'>候補</a></span>
                                            <br />
                                            <span className='sell'>可賣:
                                                <i className='js_sell'>0</i>
                                            </span>
                                            <span className='group'>團位:
                                                <i className='js_group'>20</i>
                                            </span>
                                            <span className='price'>$234,567</span>
                                        </div>
                                    </div>
                                </td>
                                <td  className='currentDays hasData' date="2017/05/05">
                                <div className={ActiveClass}>
                                        <span className='num'>5</span>
                                        <div className='details'>
                                        <span className='status'> <a href="" className='alternate'>請洽專員</a></span><br />
                                        <span className='sell'>可賣:
                                                <i className='js_sell'>{newdata[newdata.length-1].availableVancancy}</i>
                                            </span>
                                            <span className='group'>席次:
                                                <i className='js_group'>{newdata[newdata.length-1].totalVacnacy}</i>
                                            </span>
                                            <span className='price'>
                                            ${newdata[newdata.length-1].price}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays ' date="2017/05/06">
                                <div className='day'>
                                        <span className='num'>6</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='days table_width'>
                                <td className='currentDays hasData' date="2017/05/07">
                                    <div className='day'>
                                        <span className='num'>7</span>
                                        <div className='details'>
                                        <span className='status close'>關團</span>
                                        <br />
                                        <span className='sell'>可賣
                                            <i className='js_sell'>0</i>
                                        </span>
                                        <br />
                                        <span className='group'>席次
                                            <i className='js_group'>20</i>
                                        </span>
                                        <span className='price'>$234,567</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/08">
                                    <div className='day'>
                                        <span className='num'>8</span>
                                    </div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/09">
                                    <div className='day'>
                                        <span className='num'>9</span>
                                        <div className='details'>
                                            <span className='status'>額滿</span><br />
                                            <span className='sell'>可賣
                                                <i className='js_sell'>0</i>
                                            </span><br />
                                            <span className='group'>團位
                                                <i className='js_group'>20</i>
                                            </span>
                                            <span className='price'>$234,567</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/10">
                                    <div className='day'>
                                        <span className='num'>10</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/11">
                                    <div className='day'>
                                        <span className='num'>11</span>
                                    </div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/12">
                                <div className='day'>
                                        <span className='num'>12</span>
                                        <div className='details'>
                                            <span className='status'><a href="" className='more'>看更多產品</a> </span>
                                           
                                            <span className='price'>$534,678</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays ' date="2017/05/06">
                                <div className='day'>
                                        <span className='num'>6</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='days table_width'>
                                <td className='currentDays ' date="2017/05/14">
                                    <div className='day'>
                                        <span className='num'>14</span>
                                    </div>
                                </td>
                                <td className='currentDays ' date="2017/05/15">
                                    <div className='day'>
                                        <span className='num'>15</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/16">
                                    <div className='day'>
                                        <span className='num'>16</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/17">
                                    <div className='day'>
                                        <span className='num'>17</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/18">
                                    <div className='day'>
                                        <span className='num'>18</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/19">
                                    <div className='day'>
                                        <span className='num'>19</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/20">
                                    <div className='day'>
                                        <span className='num'>20</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='days table_width'>
                                <td className='currentDays ' date="2017/05/21">
                                    <div className='day'>
                                        <span className='num'>21</span>
                                    </div>
                                </td>
                                <td className='currentDays ' date="2017/05/22">
                                    <div className='day'>
                                        <span className='num'>22</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/23">
                                    <div className='day'>
                                        <span className='num'>23</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/24">
                                    <div className='day'>
                                        <span className='num'>24</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/25">
                                    <div className='day'>
                                        <span className='num'>25</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/26">
                                    <div className='day'>
                                        <span className='num'>26</span>
                                    </div>
                                </td>
                                <td className='currentDays' date="2017/05/27">
                                    <div className='day'>
                                        <span className='num'>27</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='days table_width'>
                                <td className='currentDays hasData' date="2017/05/28">
                                    <div className='day'>
                                        <span className='num'>28</span>
                                        <div className='details'>
                                            <span className='status'><a href='#' className='more'>看更多團</a> </span>
                                        </div>
                                    </div>
                                </td>
                                <td className='currentDays ' date="2017/05/29">
                                    <div className='day'>
                                        <span className='num'>29</span>
                                    </div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/30">
                                    <div className='day'>
                                        <span className='num'>30</span>
                                    </div>
                                </td>
                                <td className='currentDays hasData' date="2017/05/31">
                                    <div className='day'>
                                        <span className='num'>31</span>
                                    </div>
                                </td>
                                <td className='disabled'>
                                    <div className='day otherMonth'></div>
                                </td>   <td className='disabled'>
                                    <div className='day otherMonth'></div>
                                </td>   <td className='disabled'>
                                    <div className='day otherMonth'></div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

