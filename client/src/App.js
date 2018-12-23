import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FetchCategories from './components/FetchCategories';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route path="/" component={FetchCategories} />
    <Route component={NoMatch} />
  </Switch>
)

export default App