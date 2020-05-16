import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import About from "../pages/About";
import Work from '../pages/Work';
import Contact from '../pages/Contact';

class Main extends Component {

    render() {
        return (
            <Router basename="/">
                <div id='Main' className='main-panel'>
                    <div className='content-container'>
                        <Switch>
                            <Route exact path='/' component={() => <Home {...this.props} />} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/work" component={Work} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
