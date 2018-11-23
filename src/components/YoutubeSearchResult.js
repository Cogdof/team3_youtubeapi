import React, { Component } from 'react';
//import PropTypes form 'prop-types';


class YoutubeSerachResult extends Component {
  render() {

    const searchedParsedItems = this.props.searchedParsedItems;
    const videoIds = [];

    return (

      <div>

        <p><a href={searchedParsedItems[0].videoLink}>{searchedParsedItems[0].title}</a></p>
        <a href={searchedParsedItems[0].videoLink}><img src={searchedParsedItems[0].thumbnailsLink}/></a>
        <p>{searchedParsedItems[0].channelTitle}  {searchedParsedItems[0].publishedAt}</p>
        <p> {searchedParsedItems[0].description} </p>


        <p><a href={searchedParsedItems[1].videoLink}>{searchedParsedItems[1].title}</a></p>
        <a href={searchedParsedItems[1].videoLink}><img src={searchedParsedItems[1].thumbnailsLink}/></a>
        <p>{searchedParsedItems[1].channelTitle}  {searchedParsedItems[1].publishedAt}</p>
        <p> {searchedParsedItems[1].description} </p>


        <p><a href={searchedParsedItems[2].videoLink}>{searchedParsedItems[2].title}</a></p>
        <a href={searchedParsedItems[2].videoLink}><img src={searchedParsedItems[2].thumbnailsLink}/></a>
        <p>{searchedParsedItems[2].channelTitle}  {searchedParsedItems[2].publishedAt}</p>
        <p> {searchedParsedItems[2].description} </p>


        <p><a href={searchedParsedItems[3].videoLink}>{searchedParsedItems[3].title}</a></p>
        <a href={searchedParsedItems[3].videoLink}><img src={searchedParsedItems[3].thumbnailsLink}/></a>
        <p>{searchedParsedItems[3].channelTitle}  {searchedParsedItems[3].publishedAt}</p>
        <p> {searchedParsedItems[3].description} </p>


        <p><a href={searchedParsedItems[4].videoLink}>{searchedParsedItems[4].title}</a></p>
        <a href={searchedParsedItems[4].videoLink}><img src={searchedParsedItems[4].thumbnailsLink}/></a>
        <p>{searchedParsedItems[4].channelTitle}  {searchedParsedItems[4].publishedAt}</p>
        <p> {searchedParsedItems[4].description} </p>

      </div>

    );


  }
}


export default YoutubeSerachResult;
