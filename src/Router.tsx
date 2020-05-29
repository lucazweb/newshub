import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import { Header } from './components';
import { Home } from './pages';

const Router = () => (
  <>
    <Header />
    <Grid>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Grid>
  </>
);

export default Router;
