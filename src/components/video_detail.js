import React from 'react';
import { Embed, Header, Segment } from 'semantic-ui-react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <Embed
        id={videoId}
        source='youtube'
        active={true}
      />
      <Header>{video.snippet.title}</Header>
      <Segment>{video.snippet.description}</Segment>
    </div>
  );
};

export default VideoDetail;
