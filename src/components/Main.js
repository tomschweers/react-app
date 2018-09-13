import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NestedTable from './NestedTable'
import MyAccordion from './Accordion'

// This is the main routing for the application

class Main extends React.Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/nestedtable' component={NestedTable}/>
          <Route path='/accordion' component={MyAccordion}/>
        </Switch>
      </main>
    )
  }
}

export default Main
