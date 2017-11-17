import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment(this.props.user.id);
  }

  decrement() {
    this.props.decrement(this.props.user.id);
  }

  render() {
    return (
      <div>
        <Button.Group>
          <Button primary onClick={this.increment}>Like</Button>
          <Button.Or text={this.props.user.value} />
          <Button secondary onClick={this.decrement}>Dislike</Button>
        </Button.Group>
      </div>
    );
  }
}

Options.propTypes = {
  user: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Options;
