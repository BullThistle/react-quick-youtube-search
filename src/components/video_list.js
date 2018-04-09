import React from 'react';
import VideoListItem from './video_list_item';
import { List } from 'semantic-ui-react';

const VideoList = (props) => {
  const videoItems = props.videos.map( (video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return (
    <List divided verticalAlign='middle'>
      {videoItems}
    </List>
  );
};

export default VideoList;
