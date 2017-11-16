import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'semantic-ui-react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onClick() {
    this.props.addUser(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <Input
          label={<Button onClick={this.onClick}>Add User</Button>}
          labelPosition="right"
          placeholder="Username"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

Create.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default Create;
