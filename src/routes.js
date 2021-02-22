import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import Landing from './Components/Landing/Landing'
import Lounge from './Components/Lounge/Lounge'
import ThankYou from './Components/ThankYou/ThankYou'
import Popup from './Components/Popup/Popup'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/lounge' component={Lounge} />
    <Route path='/thankyou' component={ThankYou} />
    <Route path='/popup' component={Popup} />
    <Route render={() => <Redirect to='/' />} />
  </Switch>
)