import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {color: true}

  change = () => {
    const {color} = this.state
    this.setState({color: !color})
  }

  render() {
    const {color} = this.state
    const modetext = color ? 'LightMode' : 'DarkMode'
    const mode = color ? 'dark' : 'light'
    return (
      <div className={`${mode} main`}>
        <h1>Click to Change Mode</h1>
        <button onClick={this.change} type="button">
          {modetext}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
