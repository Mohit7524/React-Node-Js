import logo from './logo.svg';
import './App.css';

import React, { Component } from "react"
import "./App.css"


const name=['Gaurav Rai','Ravisekher singh','Mohit gupta','Ashish Mishra','Vishnu']


class App extends Component{
  constructor()
{
  super()
   this.state={naam:'',countr:0,countp:0,countl:0,countq:0,counta:0,}
   this.changeName=this.changeName.bind(this)
   
   
}

 changeName()
{
  this.setState({naam:name[Math.floor((Math.random() * 5) +0)]})
   if(this.state.naam===name[0])
  {
    let oldCountr=this.state.countr
    this.setState({ countr : oldCountr +1})
    
  }
  else if(this.state.naam===name[1])
  {
    let oldCountp=this.state.countp
    this.setState({countp:oldCountp +1})
  }
  else if(this.state.naam===name[2])
  {
    let oldCountl=this.state.countl
    this.setState({countl:oldCountl +1})
  }
  else if(this.state.naam===name[3])
  {
    let oldCountq=this.state.countq
    this.setState({countq:oldCountq +1})
  }
  else if(this.state.naam===name[4])
  {
    let oldCounta=this.state.counta
    this.setState({counta:oldCounta +1})
  }
}

  render()
  {
    return(
      <div className="counterName">
        <center>

        <p style={{height:105}} >{this.state.naam}</p>
        <button onClick={this.changeName}>Show Name</button>
        <h2>Display Count</h2>
        <p>Gaurav Rai {this.state.countr}</p>
        <p>Ravisekher singh {this.state.countp}</p>
        <p>Mohit gupta {this.state.countl}</p>
        <p>Ashish Mishra {this.state.countq}</p>
        <p>Vishnu {this.state.counta}</p>
        </center>
      </div>
    )
  }
}
export default App;