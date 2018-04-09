import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <Input className="centered" icon placeholder='Search...'>
          <input
            className="centered"
            style={{
              width: '50em',
              'margin-top': '2em',
              'margin-bottom': '2em',
            }}
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })}
          />
          <Icon name='search' />
        </Input>
      </div>
    )
  }
}

export default SearchBar;
