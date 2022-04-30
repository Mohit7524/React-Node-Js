import logo from './logo.svg';
import './App.css';

import { Component } from "react";

class App extends Component
{
  constructor()
  {
    super()
    this.state={color:'red',text:"I am red"}
    this.change=this.change.bind(this)
 
  }
  change()
  {
    
    if(this.state.color==='red')
    {
      this.setState({color:"green",text:"I am green"})
    }
    else{
      this.setState({color:"red",text:"I am red"})
    }
  }
  
  render()
  {
    var myfun={
      
    }
    return(
      <div style={myfun}>
        <center>
      <h1 style={{color:this.state.color}}>{this.state.text}</h1>
      <button onClick={this.change}>Toggle</button>
      </center>
      </div>
    )
  }
}
export default App;