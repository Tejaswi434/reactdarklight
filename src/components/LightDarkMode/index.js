import {Component} from 'react'

class LightDarkMode extends Component {
state={back:true}

dark=()=>{
    this.setState({back:false})
}
light=()=>{
    this.setState({back:true})
}
  
  render() {
      
      const{back}=this.state

      return(
          
        if(back){
     <div className="dark">
         <h1>Click to Change Mode</h1>
         <button onClick={this.dark}>Light Mode</button>
     </div>
      }
      else{
          <div className="light">
         <h1>Click to Change Mode</h1>
         <button onClick={this.light}>Dark Mode</button>
     </div>
      }
      )
    }
}

export default LightDarkMode
        
