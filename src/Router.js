import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Profile from './profile/Profile'
import Main from './main/Main'
import NotFound from './shared/NotFound'

export default () =>
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/profile/:user?' component={Profile} />
    <Route component={NotFound} />
  </Switch>