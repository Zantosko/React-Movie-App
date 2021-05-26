import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import MovieContainer from './MovieContainer';
import ErrorPage from './ErrorPage'

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/movie/:id" component={MovieContainer}></Route>
      <Route path="/" component={ErrorPage}></Route>
    </Switch>
  )
}

export default Main;