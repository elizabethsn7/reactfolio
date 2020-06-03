import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import AOS from 'aos';
import Hero from '../img/hero.jpg';
import 'aos/dist/aos.css';

AOS.init();

const styles = {
	contactGrid: {
		backgroundImage: `url(${Hero})`,
		textAlign: 'center',
		justifyContent: 'center',
		color: '#fff',
		backgroundPosition: '0px 0px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no repeat',
		position: 'relative',
		top: 0,
		overflow: 'hidden'
	},
	contactBody: {
		color: '#fff',
		margin: 'auto',
		width: '100%',
		height: '100%',
		justifyContent: 'center'
	},
	description: {
		padding: '0 45px',
		maxWidth: '600px',
		color: '#fff',
		fontFamily: 'Rubik',
		fontSize: '24px',
		lineHeight: '35px'
	},
	listContainer: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	listItems: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '20px',
		fontFamily: 'Lato',
		color: '#fff'
	},
	icons: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '35px',
		color: '#fff',
		marginBottom: '12px'
	}
};

class Contact extends Component {
	render() {
		return (
			<div style={styles.contactBody}>
				<Grid style={styles.contactGrid}>
					<div data-aos='fade-up' data-aos-duration='2000'>
						<Cell col={12}>
							<h1 style={styles.contactList}>Call, email, text</h1>
							<h4>You know what to do...</h4>
						</Cell>
					</div>
					<Cell col={12}>
						<List style={styles.listContainer}>
							<ListItem>
								<ListItemContent style={styles.listItems}>
									<i
										style={styles.icons}
										className='fa fa-phone-square'
										aria-hidden='true'
									/>
									773-931-4424
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent style={styles.listItems}>
									<i
										style={styles.icons}
										className='fas fa-envelope'
										aria-hidden='true'
									/>
									liz@elizabethkipp.com
								</ListItemContent>
							</ListItem>

							<ListItem>
								<ListItemContent style={styles.listItems}>
									<i
										style={styles.icons}
										className='fa fa-home'
										aria-hidden='true'
									/>
									Austin, TX 78738
								</ListItemContent>
							</ListItem>
						</List>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
