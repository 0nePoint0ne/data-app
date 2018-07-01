
import React, { Component } from 'react';

class DisplayList extends Component {
  constructor(props){
    super(props);
    this.state = null;
  }

  render() {
    let _displayData = [];
    

    if(this.props.data != null){ 
    this.props.data.times.map((data) => {
          let htmlData = <ul >{data.time}</ul>;
          _displayData.push(htmlData);

      });
    }


    return (
      <div>
      <h1>Current Data</h1>

      
        {_displayData}
  
      </div>
    );
  }
}


export default DisplayList;