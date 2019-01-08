import React, { PureComponent } from 'react';
import './App.css';
import triangleTypeDeterminer from "./utils/type-determiner.mjs";


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
       side1 : undefined,
       side2 : undefined,
       side3 : undefined,
    }
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange = (value, target)=> this.setState({ [target] : value})
  
  render() {
    return (
      <div className="App">
          <p>
            Please enter the <code>triangle</code> sides length : 
          </p>
          <input value={this.state.side1} onChange={(e)=>this.inputChange(e.target.value,'side1')}/>
          <input value={this.state.side2} onChange={(e)=>this.inputChange(e.target.value,'side2')}/>
          <input value={this.state.side3} onChange={(e)=>this.inputChange(e.target.value,'side3')}/>
          <p className="App-link">
            {triangleTypeDeterminer(this.state.side1,this.state.side2,this.state.side3)}
          </p>
      </div>
    );
  }
}

export default App;
