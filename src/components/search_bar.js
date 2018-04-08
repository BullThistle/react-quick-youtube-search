import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default SearchBar;
