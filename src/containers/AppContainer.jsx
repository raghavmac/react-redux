import { connect } from 'react-redux';
import App from '../components/App';
import { addUser, increment, decrement } from '../actions/users';
import { getSuggestions, clear } from '../actions/suggestions';

const mapStateToProps = state => ({
  users: state.users.users,
  isFetching: state.suggestions.isFetching,
  suggestion: state.suggestions.suggestion,
  error: state.suggestions.error,
});

const mapDispatchToProps = dispatch => ({
  addUser: (user) => {
    dispatch(addUser(user));
  },
  increment: (id) => {
    dispatch(increment(id));
  },
  decrement: (id) => {
    dispatch(decrement(id));
  },
  getSuggestion: () => {
    dispatch(getSuggestions());
  },
  clearSuggestion: () => {
    dispatch(clear());
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
