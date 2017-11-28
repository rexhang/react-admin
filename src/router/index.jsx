import React, { Component } from 'react';

import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Login from '../views/Login/index.jsx';

import LeftBar from '../views/LeftBar/index.jsx';
import Page1 from '../views/Page1/index.jsx';
import Page2 from '../views/Page2/index.jsx';
import Page3 from '../views/Page3/index.jsx';
import NotFound from '../views/NotFound/index.jsx';



const Routers = () => (
    <div className="fullScreen">
        <Router>
            <div className="fullScreen">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/index">
                        <div className="fullScreen rex-cf">
                            <LeftBar /> 
                            <div className="rightContent">
                                <Switch>
                                    <Route exact path="/index/" component={Page1} />
                                    <Route exact path="/index/page1" component={Page1} />
                                    <Route exact path="/index/page2/:id" component={Page2} />
                                    <Route exact path="/index/page3" component={Page3} />
                                    <Redirect exact from='*' to='/404' />
                                </Switch>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/404' component={NotFound} />
                    <Redirect exact from='*' to='/404' />
                </Switch>
            </div>
        </Router>
    </div>
)

export default Routers;