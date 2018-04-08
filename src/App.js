import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar from './components/search_bar';

console.log(process.env.REACT_APP_YOUTUBE_API);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: process.env.REACT_APP_YOUTUBE_API, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
