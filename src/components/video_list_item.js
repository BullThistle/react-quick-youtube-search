import React from 'react';
import { List, Image } from 'semantic-ui-react';

const VideoList = ({ video, onVideoSelect }) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <List.Item>
      <Image src={imageUrl} />
      <List.Content style={{ 'position': 'absolute', 'width': '40em' }}>
        <List.Header as='a' onClick={ () => onVideoSelect(video)}>{title}</List.Header>
        <List.Description>{description}</List.Description>
      </List.Content>
    </List.Item>
  )
};

export default VideoList;
