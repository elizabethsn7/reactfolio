import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<Layout fixedHeader>
				<Header
					style={{ backgroundColor: 'white' }}
					className='header-color'
					title={
						<Link style={{ textDecoration: 'none', color: '#757575' }} to='/'>
							Liz Kipp
						</Link>
					}>
					<Navigation>
						<Link to='/About'>About</Link>
						<Link to='/Contact'>Contact</Link>
						<Link to='/Projects'>Projects</Link>
					</Navigation>
				</Header>
				<Drawer
					style={{ backgroundColor: 'white' }}
					title={
						<Link
							style={{
								textDecoration: 'none',
								color: 'black'
							}}
							to='/'>
							Home
						</Link>
					}>
					<Navigation>
						<Link to='/Resume'>Resume</Link>
						<Link to='/About'>About</Link>
						<Link to='/Contact'>Contact</Link>
						<Link to='/Projects'>Projects</Link>
					</Navigation>
				</Drawer>
				<Content>
					<Main />
					<Footer />
				</Content>
			</Layout>
		);
	}
}
export default App;
