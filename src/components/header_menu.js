import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class HeaderMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Real fast youtube search</Menu.Item>
        <Menu.Item name='myFavoriteVideos' active={activeItem === 'My favorite videos'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default HeaderMenu;
