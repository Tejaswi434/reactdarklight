// Write your code here
import {Component} from "react"
import "./index.css"

class LightDarkMode extends Component{
    state={mode:true}
    const{mode}=this.state
        light=()=>{
        
            this.setState({mode:false})
        }
        dark=()=>{
        
            this.setState({mode:true})}
         

    render(){
        
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
