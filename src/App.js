import React, { Component } from 'react';
import logo from './logo.svg';
import Greeting from './components/Greeting'
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


    /*setTimeout(()=>{
      this.setState({
        name: 'World'
      })
    },3000);*/
  }
  handleChange =(e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })

    console.log(this.state.value);
  }
  handleClick = () => {
    let url = new URL('https://www.googleapis.com/youtube/v3/search');
    console.log('keypress####');
    let params = {
      
      q:this.state.value,
      part:'snippet'
    }
    url.search = new URLSearchParams(params);
    fetch(url)
      .then(res => {
      console.log(res);
      return res.json();
      })
      .then(data =>{
        console.log(data);
         this.setState({
             data: data
        })
    })
  }
  handleKeyPress = (e) => {

  }
  render() {    //state가 변경되면 항상 마지막으로 호출
    //App.js의 state를 셋팅해서 Greeting.js에게 props로 전달
    const name = this.state.name;
    const data = this.state.data;

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
                <input type="search" id="query" name="query" className="search-field" placeholder="Search YouTube" onChange = {this.handleChange} onKeyPress = {this.handleKeyPress}/>
                <input type="submit" name="search-btn" className="search-btn" value="검색" onClick ={this.handleClick}/>
              </div>
            </div>

            <ul id="results" className="item-list">
              <li className="item">
                <a href="http://www.youtube.com/watch?v=e3Nl_TCQXuw" target="_blank">
                  <h3>Beauty and the Beast – US Official Final Trailer</h3>
                  <div className="image-wrapper">
                    <img src="https://i.ytimg.com/vi/e3Nl_TCQXuw/hqdefault.jpg"/>
                  </div>
                  <div className="description">
                    <small>By <span className="channel-title">Disney Movie Trailers</span> on <time>2017-01-31T02:44:39.000Z</time></small>
                    <p>The final trailer for Beauty and the Beast is here On March 17, rediscover a tale as old as time. Get your tickets now at BeOurGuest.com -- Disney's “Beauty ...</p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
