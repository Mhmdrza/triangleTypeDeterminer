import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      side1 : undefined,
      side2 : undefined,
      side3 : undefined,
    }
    this.inputChange = this.inputChange.bind(this)
    this.typeFetcher = this.typeFetcher.bind(this)
  }

  typeFetcher = () => {
    const { side1, side2, side3 } = this.state
    fetch(`/typeDeterminer/${side1}/${side2}/${side3}`).then(
      (response) => response.json().then(
        json => {
          this.setState({
            result: json.type
          })
        }
      )
    )
  }

  inputChange = (value, target)=> this.setState({ [target] : value})
  
  render() {
    this.typeFetcher()
    return (
      <div className="App">
          <p>
            Please enter the <code>triangle</code> sides length : 
          </p>
          <input value={this.state.side1} onChange={(e)=>this.inputChange(e.target.value,'side1')}/>
          <input value={this.state.side2} onChange={(e)=>this.inputChange(e.target.value,'side2')}/>
          <input value={this.state.side3} onChange={(e)=>this.inputChange(e.target.value,'side3')}/>
          <p className="App-link">
            {this.state.result}
          </p>
      </div>
    );
  }
}

export default App;
