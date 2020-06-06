import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import AOS from 'aos';
import Hero from '../img/hero.jpg';
import 'aos/dist/aos.css';

AOS.init();

const styles = {
	contactContainer: {
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
		justifyContent: 'center'
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
				<div style={styles.contactContainer}>
					<div data-aos='fade-up' data-aos-duration='2000'>
						<Grid item xs={12}>
							<h1 style={styles.contactList}>Call, email, text.</h1>
							<h4>You know what to do...</h4>
						</Grid>

						<Grid container spacing={2}>
							<Grid item xs={12} sm={4}>
								<ListItemText style={styles.listItems}>
									<i
										style={styles.icons}
										className='fa fa-phone-square'
										aria-hidden='true'
									/>
									773-931-4424
								</ListItemText>
							</Grid>
							<Grid item xs={12} sm={4}>
								<ListItemText style={styles.listItems}>
									<i
										style={styles.icons}
										className='fas fa-envelope'
										aria-hidden='true'
									/>
									liz@elizabethkipp.com
								</ListItemText>
							</Grid>
							<Grid item xs={12} sm={4}>
								<ListItemText style={styles.listItems}>
									<i
										style={styles.icons}
										className='fa fa-home'
										aria-hidden='true'
									/>
									Austin, TX 78738
								</ListItemText>
							</Grid>
						</Grid>
						<br></br>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
