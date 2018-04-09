import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Container } from 'semantic-ui-react';
import './App.css';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: process.env.REACT_APP_YOUTUBE_API, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}
          />
        </Container>
      </div>
    );
  }
}

export default App;
