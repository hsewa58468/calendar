import React,{Component} from 'react'
import Hello from './Hello/Hello'
import Welcome from './Welcome/Welcome'

export default class App extends React.Component{
    render(){
        return(
           <div>
               <Hello />
               <Welcome />
           </div>
        )
    }
}