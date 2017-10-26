import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import LinkList from './components/link-list'
import CreateLink from './components/create-link'
import Header from './components/header'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' component={LinkList}/>
            <Route exact path='/create' component={CreateLink}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
