import { connect } from 'react-redux';
import App from '../components/App';
import actions from '../actions/users';
import { getSuggestions, clear } from '../actions/suggestions';

const mapStateToProps = state => ({
  users: state.users.users,
  isFetching: state.suggestions.isFetching,
  suggestion: state.suggestions.suggestion,
  error: state.suggestions.error,
});

const mapDispatchToProps = dispatch => ({
  addUser: (user) => {
    dispatch(actions.addUser(user));
  },
  increment: (id) => {
    dispatch(actions.incrementAction(id));
  },
  decrement: (id) => {
    dispatch(actions.decrementAction(id));
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
