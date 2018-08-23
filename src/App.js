import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent'
import { Provider } from './context'
class App extends Component {
  // getData = () => (
  //   [
  //     {func:this.alertFunc},
  //     {data:'1234'}
  //   ]
  // )
  muscles=['Head','Shoulders','Legs','Hands']
  state = {
    Message:'HI'
  }
  getData = () => ({
    func:this.alertFunc,
    ...this.state,
    data:['Head','Shoulders','Legs','Hands'],
    name:'Saravanan'
  })
  
  alertFunc(){
    alert('HI')
  }
  render() {
    return (
      <Provider value={this.getData()}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Parent data={'Prop Child 2'}/>
      </div>
      </Provider>
    );
  }
}

export default App;
