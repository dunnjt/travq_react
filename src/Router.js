import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Profile from './profile/Profile'
import Main from './main/Main'
import Favorites from './favorites/Favorites'
import NotFound from './shared/NotFound'

export default () =>
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/favorites' component={Favorites} />
    <Route path='/profile/:user?' component={Profile} />
    <Route component={NotFound} />
  </Switch>