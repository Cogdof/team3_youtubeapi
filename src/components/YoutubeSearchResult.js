import React, { Component } from 'react';
//import PropTypes form 'prop-types';


class YoutubeSerachResult extends Component {
  render() {

    const searchedParsedItems = this.props.searchedParsedItems;
    const videoIds = [];

    return (
      <div>


<ul id="results" class="item-list">
  <li class="item">
   <a href={searchedParsedItems[0].videoLink} target="_blank">
   <h3>{searchedParsedItems[0].title}</h3>
   <div class="image-wrapper">
   <img src={searchedParsedItems[0].thumbnailsLink}/>

     </div>

      <div class="description">
      <small><span class="channel-title"> {searchedParsedItems[0].channelTitle}</span>  {searchedParsedItems[0].publishedAt}</small>
      <p> {searchedParsedItems[0].description} </p>
    </div>
    </a>
 </li>
</ul>

<ul id="results" class="item-list">
  <li class="item">
   <a href={searchedParsedItems[1].videoLink} target="_blank">
   <h3>{searchedParsedItems[1].title}</h3>
   <div class="image-wrapper">
   <img src={searchedParsedItems[1].thumbnailsLink}/>

     </div>

      <div class="description">
      <small><span class="channel-title"> {searchedParsedItems[1].channelTitle}</span>  {searchedParsedItems[1].publishedAt}</small>
      <p> {searchedParsedItems[1].description} </p>
    </div>
    </a>
 </li>
</ul>

<ul id="results" class="item-list">
  <li class="item">
   <a href={searchedParsedItems[2].videoLink} target="_blank">
   <h3>{searchedParsedItems[2].title}</h3>
   <div class="image-wrapper">
   <img src={searchedParsedItems[2].thumbnailsLink}/>

     </div>

      <div class="description">
      <small><span class="channel-title"> {searchedParsedItems[2].channelTitle}</span>  {searchedParsedItems[2].publishedAt}</small>
      <p> {searchedParsedItems[2].description} </p>
    </div>
    </a>
 </li>
</ul>

<ul id="results" class="item-list">
  <li class="item">
   <a href={searchedParsedItems[3].videoLink} target="_blank">
   <h3>{searchedParsedItems[3].title}</h3>
   <div class="image-wrapper">
   <img src={searchedParsedItems[3].thumbnailsLink}/>

     </div>

      <div class="description">
      <small><span class="channel-title"> {searchedParsedItems[3].channelTitle}</span>  {searchedParsedItems[3].publishedAt}</small>
      <p> {searchedParsedItems[3].description} </p>
    </div>
    </a>
 </li>
</ul>

<ul id="results" class="item-list">
  <li class="item">
   <a href={searchedParsedItems[4].videoLink} target="_blank">
   <h3>{searchedParsedItems[4].title}</h3>
   <div class="image-wrapper">
   <img src={searchedParsedItems[4].thumbnailsLink}/>

     </div>

      <div class="description">
      <small><span class="channel-title"> {searchedParsedItems[4].channelTitle}</span>  {searchedParsedItems[4].publishedAt}</small>
      <p> {searchedParsedItems[4].description} </p>
    </div>
    </a>
 </li>
</ul>


      </div>


    );


  }
}


export default YoutubeSerachResult;
