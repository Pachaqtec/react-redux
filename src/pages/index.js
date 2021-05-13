import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Main from 'layout/Main'
import Home from './Home'
import User from './UserPage'
import Others from './Others'

const NotFound = () => <h1>Not Found 404</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/user" >
            <User test="esta es una prueba" />
          </Route>
          <Route path="/others" >
            <Others />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  )
}

export default Router
