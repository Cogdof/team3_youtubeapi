import React, { Component } from 'react';
//import PropTypes form 'prop-types';



class Greeting extends Component {
  render() {

    //this.props.name
    //this.props.id

     const {id, name} = this.props;



      //var name = "world";
      return <p> Hello {name}</p>

  }
}


export default Greeting;
