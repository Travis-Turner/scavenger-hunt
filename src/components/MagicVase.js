import React from 'react';

class MagicVase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          notHere: false
        }
    }
    render(){
      return(
        <p>Magic Vase</p>
      )
      
    }
}

export default MagicVase;