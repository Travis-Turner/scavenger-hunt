import React from 'react';

class GenieLamp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          notHere: false
        }
    }
    render(){
      return(
        <p>Genie Lamp</p>
      )
      
    }
}

export default GenieLamp;