import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import Create from './create';
import Lists from './lists';
import Options from './options';

require('../assets/styles/app.scss');

const App = props => (
  <div>
    <Grid centered columns={6}>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Segment padded>
            <Create {...props} />
            <Divider inverted />
            <Lists {...props} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Options {...props} />
    </Grid>
  </div>
);

App.propTypes = {

};

export default App;
