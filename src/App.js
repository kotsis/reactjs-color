import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { current_color: '000000', selected_color_index: null, color_list: [], error_msg: 'aa' };//katskos: we initiate the applicaiton state here
    this.handleChange = this.handleChange.bind(this);
  }

  addColorToList(){

  }
  removeColorFromList(){

  }
  updateColorInList(){

  }

  handleChange(e) {
    this.setState({ current_color: e.target.value });
  }

  render() {

    //katskos: conditional div with error message
    let error_div;
    if(this.state.error_msg){
      error_div = <div style={{color: 'red'}}>lala</div>
    }
    else{
      error_div = '';
    }

    return (
      <div className="App">
        <div>
          Selected color: {this.state.current_color+1} <br/>
          Put Hex color here: <input type="text" name="hex_color" value={this.state.current_color} onChange={this.handleChange} /><br/>
          <button>Add/Update Color</button>
        </div>
        {error_div}

      </div>
    );
  }
}

export default App;
