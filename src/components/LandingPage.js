import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Hero from '../img/hero.jpg';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles = makeStyles(theme => ({
	landingContainer: {
		backgroundImage: `url(${Hero})`,
		justifyContent: 'center',
		color: '#fff',
		backgroundPosition: '0px 0px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no repeat',
		position: 'relative',
		top: 0,
		overflow: 'hidden'
	},
	bannerText: {
		paddingLeft: 80
	},
	icons: {
		fontSize: 50,
		color: '#ff7676'
	},
	skillsContainer: {
		background: '#fff',
		padding: '2rem',
		marginBottom: '1.5rem',
		position: 'relative',
		minHeight: 1
	},
	h1: {
		marginTop: 100,
		fontSize: 67,
		fontWeight: 300,
		lineHeight: 1.15,
		fontFamily: ['Rubik', 'sans-serif']
	},
	h2: {
		fontSize: '2rem',
		fontWeight: 300,
		fontFamily: ['Rubik', 'sans-serif'],
		lineHeight: '1.5',
		color: '#fff'
	},
	h3: {
		margin: '1.414rem 0 .5rem',
		fontSize: '1.25rem',
		fontFamily: ['Rubik', 'sans-serif'],
		lineHeight: '1.8',
		color: '#374352',
		textAlign: 'center'
	},
	p: {
		fontSize: 16,
		fontWeight: 300,
		fontFamily: ['Rubik', 'sans-serif'],
		lineHeight: '1.8',
		color: '#7e8890'
	}
}));

export default function LandingPage() {
	const classes = useStyles();

	return (
		<Grid container>
			<div className={classes.landingContainer}>
				<div data-aos='fade-up' data-aos-duration='2000'>
					<Grid item xs={8} className={classes.bannerText}>
						<h1 className={classes.h1}>
							I'm a web developer based in Austin, Tx
						</h1>
					</Grid>
					<Grid item xs={8} className={classes.bannerText}>
						<h2 className={classes.h2}>
							A photographer turned web developer. That's right, I went to the
							dark side.
						</h2>
					</Grid>
				</div>
			</div>

			{/* START: My Skills section */}
			<Container style={{ padding: 0 }}>
				<Grid
					container
					style={{
						display: 'flex',
						justifyContent: 'center',
						paddingLeft: 20,
						paddingRight: 20,
						background: '#F3F3F3',
						paddingBottom: 70
					}}>
					<Grid item xs={12}>
						<h2
							style={{
								textAlign: 'center',
								padding: 30,
								color: '#374352'
							}}>
							My Skills
						</h2>
					</Grid>

					<Grid item xs={12} sm={3} className={classes.skillsContainer}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}>
							<ImportantDevicesIcon className={classes.icons} />
						</div>
						<h3 className={classes.h3}>Coding</h3>
						<p className={classes.p}>
							HTML, CSS, JavaScript, React, React Native, Angular, Vue.js,
							TypeScript, GitHub, MongoDB.
						</p>
					</Grid>

					<Grid item xs={12} sm={3} className={classes.skillsContainer}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}>
							<EmojiObjectsOutlinedIcon className={classes.icons} />
						</div>
						<h3 className={classes.h3}>Smarts</h3>
						<p className={classes.p}>
							A problem solving, communicative, collaborative powerhouse.
						</p>
					</Grid>

					<Grid item xs={12} sm={3} className={classes.skillsContainer}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center'
							}}>
							<CreateOutlinedIcon className={classes.icons} />
						</div>
						<h3 className={classes.h3}>Design</h3>
						<p className={classes.p}>
							Photography, Adobe Photoshop, Illustrator, InDesign, Lightroom,
							Material Design.
						</p>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
}
