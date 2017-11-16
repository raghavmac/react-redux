import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Options = props => (
  <div>
    <Button.Group>
      <Button primary onClick={props.increment}>Like</Button>
      <Button.Or text={props.value} />
      <Button secondary onClick={props.decrement}>Dislike</Button>
    </Button.Group>
  </div>
);

Options.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Options;
