// Write your code here
import {Component} from "react"
import "./index.css"

class LightDarkMode extends Component{
    state={mode:true}

    render(){
        const{mode}=this.state
        light=()=>{
            const {mode}=this.state
            this.setState({mode:false})
        }
        dark=()=>{
             const {mode}=this.state
            this.setState({mode:true})}
         
            return(
           {mode ?
          (<div className="darkcontainer">
        <h1>Click to change the mode</h1>
                <button className="but" onClick={this.light}>Light Mode</button>
                 </div>) : 
                ( <div classsName="lightcontainer">
                 <h1>Click to change the mode</h1>
                <button className="but" onClick={this.dark}>Dark Mode</button>
                 </div>)
                 }
           
        )
    }

}

export LightDarkMode default 
