import React from 'react';

class SecretBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          foolsGold: false
        }
    }
    render(){
      return (
        <p>Secret Box</p>
      )

    }
}

export default SecretBox;