import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RegionPage from './pages/RegionPage/RegionPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/region-option" component={RegionPage} />
        <Route exact path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
