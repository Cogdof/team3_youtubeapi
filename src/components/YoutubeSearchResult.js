import React, { Component } from 'react';
//import PropTypes form 'prop-types';


class YoutubeSerachResult extends Component {
  render() {

    const searchedParsedItems = this.props.searchedParsedItems;
    const videoIds = [];


    return (

      <div>

        
        <p>{searchedParsedItems[0].title}</p>



        <p>{searchedParsedItems[1].title}</p>
        <p>{searchedParsedItems[2].title}</p>
        <p>{searchedParsedItems[3].title}</p>
        <p>{searchedParsedItems[4].title}</p>
        
      </div>

    );


  }
}


export default YoutubeSerachResult;
