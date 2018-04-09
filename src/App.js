import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Container, Grid } from 'semantic-ui-react';

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
    this.videoSearch('dave smith pro-2');
  }

  videoSearch(term) {
      YTSearch({key: process.env.REACT_APP_YOUTUBE_API, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div style={{ 'background-color': '#FAFAFA' }}>
        <Grid>
          <Container>
            <SearchBar className="centered" onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}
            />
          </Container>
        </Grid>
      </div>
    );
  }
}

export default App;
