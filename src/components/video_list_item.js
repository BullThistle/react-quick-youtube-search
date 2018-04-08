import React from 'react';
import { List, Image, Header } from 'semantic-ui-react';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  const description = video.snippet.description;

  console.log(video);
  return (
    <List.Item>
      <Image src={imageUrl} />
      <List.Content style={{ 'position': 'absolute', 'width': '40em' }}>
        <List.Header as='a'>{title}</List.Header>
        <List.Description>{description}</List.Description>
      </List.Content>
    </List.Item>
  )
};

export default VideoListItem;
