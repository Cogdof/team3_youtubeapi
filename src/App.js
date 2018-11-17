import React, { Component } from 'react';
// import logo from './logo.svg';
import YoutubeSearchResult from './components/YoutubeSearchResult'
import './App.css';

class App extends Component {
  state = {
    name: null,
    value:'',
    data:''
  }
  ComponentWillReceiveProps(nextProps){
    /*this.State  //name = null
    nextProps   //name = world*/
  }

  componentDidMount(){    //이 컴포넌트가 정상적으로 작동하면 componentDidMount() 호출
    //fetch ployfil

  }
  handleChange =(e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })

    console.log(this.state.value);
  }
  searchButtonClick = () => {
    let url = new URL('https://www.googleapis.com/youtube/v3/search');

    let params = {
      q:this.state.value,
      part:'snippet'
    }
    url.search = new URLSearchParams(params);
    fetch(url)
      .then(res => {
      // console.log(res);
      return res.json();
      })
      .then(data =>{


        var searchedItems = data.items;
        var searchedParsedItems = [];

        for (var i=0; i<searchedItems.length; i++){
          var parsedItem = {};
          parsedItem.title = searchedItems[i].snippet.title;
          parsedItem.videoLink = "https://www.youtube.com/watch?v="+searchedItems[i].id.videoId;
          parsedItem.thumbnailsLink = searchedItems[i].snippet.thumbnails.default.url;
          // 필요한 정보들 추가한다
          searchedParsedItems.push(parsedItem);
        }

        for(var i=0; i<searchedItems.length; i++){
          console.log(searchedParsedItems[i]);
        }

         this.setState({
          searchedParsedItems:searchedParsedItems
        })
    })
  }
  handleKeyPress = (e) => {

  }
  render() {    //state가 변경되면 항상 마지막으로 호출
    //App.js의 state를 셋팅해서 Greeting.js에게 props로 전달

    var searchedParsedItems = this.state.searchedParsedItems;
    if(!searchedParsedItems){
      searchedParsedItems = [];
      searchedParsedItems.push({});
      searchedParsedItems.push({});
      searchedParsedItems.push({});
      searchedParsedItems.push({});
      searchedParsedItems.push({});
    }

    return (

      <div className="App">
        <div id="container">
          <header>
            <h1>Search <span>Videos</span></h1>
            <p>Search all YouTube Videos</p>
          </header>
          <section>

            <div id="search-form" >
              <div className="fieldcontainer">
                <input type="search" id="query" name="query" className="search-field" placeholder="Search YouTube"/>
                <input type="submit" name="search-btn" className="search-btn" value="검색" onClick ={this.searchButtonClick}/>
              </div>
            </div>

            <YoutubeSearchResult searchedParsedItems={searchedParsedItems} />

          </section>
        </div>
      </div>
    );
  }

  
}

export default App;
