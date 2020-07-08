import React, { Component } from 'react';
import '../../App.css';
import './Contact.css';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hero from '../../img/hero.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class Contact extends Component {
	render() {
		return (
			<div style={styles.contactBody}>
				<div style={styles.contactContainer}>
					<div data-aos='fade-up' data-aos-duration='2000'>
						<Grid item xs={12}>
							<h1 className='headerH1'>Call, email, text.</h1>
							<h4 className='description'>You know what to do...</h4>
						</Grid>

						<Grid container>
							<Grid item xs={12} sm={4}>
								<ListItemText className='listItems'>
									<i
										style={styles.icons}
										className='fa fa-phone-square'
										aria-hidden='true'
									/>
									See resume
								</ListItemText>
							</Grid>
							<Grid item xs={12} sm={4}>
								<ListItemText className='listItems'>
									<i
										style={styles.icons}
										className='fas fa-envelope'
										aria-hidden='true'
									/>
									liz@elizabethkipp.com
								</ListItemText>
							</Grid>
							<Grid item xs={12} sm={4}>
								<ListItemText className='listItems'>
									<i
										style={styles.icons}
										className='fa fa-home'
										aria-hidden='true'
									/>
									Austin, TX 78738
								</ListItemText>
							</Grid>
						</Grid>
					</div>
				</div>

				<Grid container style={styles.resume}>
					<Grid container>
						<Grid
							item
							style={{
								display: 'flex',
								alignSelf: 'center',
								margin: '0 auto'
							}}>
							<div data-aos='fade-up' data-aos-duration='2000'>
								<Typography
									style={{
										color: '#374252'
									}}
									className='workTogther'
									variant='h1'>
									Hello!
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
const styles = {
	root: {
		flexGrow: 1
	},
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
	icons: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '35px',
		color: '#fff',
		marginBottom: '12px'
	},
	resume: {
		display: 'flex',
		color: '#000',
		height: 200,
		background: '#f3f3f3'
	},
	button: {
		textAlign: 'center',
		fontSize: 20,
		height: 80,
		width: 200,
		background: 'transparent',
		borderRadius: 3,
		border: '1px solid #737373',
		margin: '0 auto'
	}
};
export default Contact;
