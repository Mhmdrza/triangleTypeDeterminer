import React, { PureComponent } from 'react';
import { triangleDrawer, clearCanvas } from './utils/triangle-drawer'

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      side1 : 4,
      side2 : 5,
      side3 : 7,
    }
    this.canvas = React.createRef()
    this.inputChange = this.inputChange.bind(this)
    this.typeFetcher = this.typeFetcher.bind(this)
  }

  typeFetcher () {
    const { side1, side2, side3 } = this.state
    if(typeof side1 === "number" && typeof side2 === "number" && typeof side3 === "number")
      fetch(`/typeDeterminer?side1=${side1+"ss"}&side2=${side2}&side3=${side3}`).then(
        (response) => response.json().then(
          json => {
            json.isTriangle ? triangleDrawer(side1, side2, side3, this.canvas.current) : clearCanvas(this.canvas.current)
            this.setState({
              message : json.description,
              isTriangle : json.isTriangle
            })
          }
        )
      )
  }
  
  inputChange = ( event )=> {
    this.setState(
      { [event.target.name] : event.target.type === 'number' ? parseFloat(event.target.value): 'nope'},
      this.typeFetcher()
    )
    
  }
  
  componentDidMount = () => {
    this.typeFetcher()
  }
  
  render() {
    return (
      <div className="App">
          <p>
            Please enter the <code>triangle</code> sides length : 
          </p>
          <input value={this.state.side1} name="side1" type="number" onChange={this.inputChange}/>
          <input value={this.state.side2} name="side2" type="number" onChange={this.inputChange}/>
          <input value={this.state.side3} name="side3" type="number" onChange={this.inputChange}/>
          <p className="App-link">
            {this.state.message}
          </p>
          <canvas ref={this.canvas} style={{transform0 : 'rotate(-90deg)'}} width="200" height="200">
            <p>Some default content can appear here.</p>
          </canvas>
      </div>
    );
  }
}

export default App;
