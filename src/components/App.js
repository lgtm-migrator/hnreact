import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './404Page'
import NavBar from './NavBar'
import Stories from './Stories'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="main-container">
            <NavBar />
            <div className="container">
              <Switch>
                {
                  <Fragment>
                    <Route path='/' exact component={Stories} />
                  </Fragment>
                }
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App