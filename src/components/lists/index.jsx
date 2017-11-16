import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Grid } from 'semantic-ui-react';

const Lists = props => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Content>
        <Grid divided="vertically">
          {props.user.map(username => (
            <Grid.Row key={Math.random()} columns={2}>
              <Grid.Column>
                <List.Header as="a">
                  <Button circular icon="user" />
                  {username}
                </List.Header>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </List.Content>
    </List.Item>
  </List>
);

Lists.defaultProps = {
  user: [],
};

Lists.propTypes = {
  user: PropTypes.arrayOf(PropTypes.string),
};

export default Lists;
