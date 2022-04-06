import React,{Component} from 'react'
import welcome from'./Welcome.module.css'//module引入模式-->避免class命名衝突問題

export default class Welcome extends React.Component{
    render(){
        return(
           <div>
               <h2 className={welcome.component}>Welcome</h2> 
           </div>
        )
    }
}