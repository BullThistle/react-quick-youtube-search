import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Container } from 'semantic-ui-react';
import './App.css';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

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
        <Container>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </Container>
      </div>
    );
  }
}

export default App;
