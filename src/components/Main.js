import React from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
	<Switch>
		<Route exact path='/' component={LandingPage} />
		<Route path='/About' component={About} />
		<Route path='/Contact' component={Contact} />
		<Route path='/Projects' component={Projects} />
		<Route path='/Resume' component={Resume} />
	</Switch>
);
export default Main;
