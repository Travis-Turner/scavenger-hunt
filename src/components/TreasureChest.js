import React from 'react';

class TreasureChest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          secretMessage: 'the eagle flies at midnight'
        }
    }
    render(){
      return(
        <p>Treasure Chest</p>
      )
    }
}

export default TreasureChest;