import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import DisplayList from './display-list.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = null;
  }

  componentDidMount(){
   const itemsRef = firebase.database().ref('times');
  itemsRef.on('value', (snapshot) => {
    let times = snapshot.val();
    let newState = [];
    for (let time in times) {
      newState.push({
        id: times,
        time: times[time].time
      });
    }
    this.setState({
      times: newState
    });
    //console.log(newState);
  });
  }

  formatMinutesAndSeconds(data){
    if(data < 9){
      return "0" +data;
    }
    else
      return data;
  }


  addData(){
  let date = new Date();
  let current_time = date.getHours() + ":" + this.formatMinutesAndSeconds(date.getMinutes()) + ":" 
  + this.formatMinutesAndSeconds(date.getSeconds());
  const itemsRef = firebase.database().ref('times');
  const item = {
    time: current_time,
  }
   itemsRef.push(item);
  }

  removeData(){
     const itemRef = firebase.database().ref(`times`);
    itemRef.remove();
  }



  render() {
    let dataOutput;
    if(this.state == null){
      dataOutput = <DisplayList />;
    }
    else if(this.state != null){
      dataOutput = <DisplayList data = {this.state} />;
    }


    return (
      <div className="App">
        <header className="">

          <h1 className="App-title">Send/Receive Data</h1>
        </header>
        <input type="button" value = "Add" onClick={this.addData.bind(this)}/>
        <input type="button" value = "remove all data" onClick={this.removeData.bind(this)}/>
       {dataOutput}
        
      </div>
    );
  }
}

export default App;
