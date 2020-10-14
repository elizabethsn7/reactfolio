import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import About from './About/About';
import Contact from './Contact/Contact';
import Work from './Work/Work';
import Blog from './Blog/Blog';
import Post from './Post/Post';

const Main = () => (
	<Switch>
		<Route exact path='/' component={LandingPage} />
		<Route path='/About' component={About} />
		<Route path='/Contact' component={Contact} />
		<Route path='/Work' component={Work} />
		<Route exact path='/Blog' component={Blog} />
		<Route path='/Blog/:slug' render={Post} />
	</Switch>
);
export default Main;
