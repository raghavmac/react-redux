import React from 'react';
import { Container, Header, Grid, Segment, Divider } from 'semantic-ui-react';
import Create from './create';
import Lists from './lists';

require('../assets/styles/app.scss');

const App = props => (
  <div>
    <Container textAlign="center">
      <Header as="h3">Redux Users</Header>
    </Container>
    <Grid centered columns={6}>
      <Grid.Row columns={5}>
        <Grid.Column>
          <Segment padded>
            <Create {...props} />
            <Divider inverted />
            <Lists {...props} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
