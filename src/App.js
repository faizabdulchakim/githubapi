import React from 'react';
import Box from '@material-ui/core/Box';

import Main_page  from './pages/Main_page.js';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  
	constructor(props) {
		super(props);
  }

  render() {
    const { classes } = this.props;
		return(
      <Box>
        <Router>

          <Switch>
            

            <Route path="/"  component={Main_page} >
            </Route>
          </Switch>

        </Router>
      </Box>
    )
  }

}

export default App;
