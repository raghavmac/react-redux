import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Grid } from 'semantic-ui-react';
import Options from '../options';

const Lists = props => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Content>
        <Grid divided="vertically">
          {props.users.map(user => (
            <Grid.Row key={user.id} columns={2}>
              <Grid.Column>
                <List.Header as="a">
                  <Button circular icon="user" />
                  {user.name}
                </List.Header>
              </Grid.Column>
              <Grid.Column>
                <Options
                  user={user}
                  increment={props.increment}
                  decrement={props.decrement}
                />
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </List.Content>
    </List.Item>
  </List>
);

Lists.defaultProps = {
  users: [],
};

Lists.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Lists;
