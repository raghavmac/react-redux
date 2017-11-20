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

  componentWillReceiveProps(props) {
    this.setState({ value: props.suggestion });
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onClick() {
    if (this.state.value.length) {
      this.props.addUser(this.state.value);
      this.props.clearSuggestion();
    }
  }

  render() {
    return (
      <div>
        <Input
          loading={this.props.isFetching}
          iconPosition="left"
          size="small"
          label={<Button onClick={this.onClick}>Add User</Button>}
          labelPosition="right"
          placeholder="Username"
          value={this.state.value}
          onChange={this.onChange}
          disabled={this.props.isFetching}
        />
        <Button
          size="small"
          color="grey"
          onClick={this.props.getSuggestion}
          style={{ marginLeft: '5px' }}
        >
          {this.props.error ? 'Try Again' : 'Get Suggestion'}
        </Button>
      </div>
    );
  }
}

Create.defaultProps = {
  getSuggestion: () => {},
  clearSuggestion: () => {},
  isFetching: false,
  suggestion: '',
  error: false,
};

Create.propTypes = {
  addUser: PropTypes.func.isRequired,
  getSuggestion: PropTypes.func,
  clearSuggestion: PropTypes.func,
  isFetching: PropTypes.bool,
  suggestion: PropTypes.string,
  error: PropTypes.bool,
};

export default Create;
