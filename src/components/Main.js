import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Blog from './Blog';
import Post from './Post';

const Main = () => (
	<Switch>
		<Route exact path='/' component={LandingPage} />
		<Route path='/About' component={About} />
		<Route path='/Contact' component={Contact} />
		<Route path='/Projects' component={Projects} />
		<Route exact path='/Blog' component={Blog} />
		<Route path='/Blog/:slug' render={Post} />
	</Switch>
);
export default Main;
