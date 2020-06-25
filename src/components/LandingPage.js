import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles = makeStyles(theme => ({
	skillsContainer: {},
	icons: {
		fontSize: 50,
		color: '#ff7676'
	},

	h2: {
		fontSize: '2rem',
		fontWeight: 300,
		lineHeight: '1.5',
		color: '#fff'
	},
	h3: {
		margin: '1.414rem 0 .5rem',
		fontSize: '1.25rem',
		lineHeight: '1.8',
		color: '#374352',
		textAlign: 'center'
	},
	p: {
		fontSize: 16,
		fontWeight: 300,
		lineHeight: '1.8',
		color: '#7e8890'
	}
}));

export default function LandingPage() {
	const classes = useStyles();

	return (
		<div className='root'>
			<Grid item xs={12} className='header-grid'>
				<div data-aos='fade-up' data-aos-duration='2000'>
					<Grid item xs={12} md={8}>
						<h1 className='headerH1 header-text'>
							I'm a web developer based in Austin, Tx
						</h1>
					</Grid>
					<Grid item xs={12} md={8}>
						<p className='description'>
							A photographer turned web developer. That's right, I went to the
							dark side.
						</p>
					</Grid>
				</div>
			</Grid>

			{/* START: My Skills section */}
			<Grid container>
				<Grid item xs={12}>
					<div data-aos='fade-up' data-aos-duration='2000'>
						<h3 className='font-fam'>My Skills</h3>
					</div>
				</Grid>
			</Grid>
			<div data-aos='fade-up' data-aos-duration='2000'>
				<Grid
					container
					style={{
						display: 'flex',
						justifyContent: 'center',
						background: '#FEFEFE',
						paddingTop: 40,
						paddingBottom: 70
					}}>
					<Grid item xs={12} sm={3} className='skills'>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<ImportantDevicesIcon className={classes.icons} />
						</div>
						<h3 className={classes.h3}>Coding</h3>
						<p className={classes.p}>
							HTML, CSS, JavaScript, React, React Native, Angular, Vue.js,
							TypeScript, GitHub, MongoDB.
						</p>
					</Grid>

					<Grid item xs={12} sm={3} className='skills'>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<EmojiObjectsOutlinedIcon className={classes.icons} />
						</div>
						<h3 className={classes.h3}>Smarts</h3>
						<p className={classes.p}>
							A problem solving, communicative, collaborative powerhouse.
						</p>
					</Grid>

					<Grid item xs={12} sm={3} className='skills'>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<CreateOutlinedIcon className={classes.icons} />
						</div>
						<h3 className={classes.h3}>Design</h3>
						<p className={classes.p}>
							Photography, Adobe Photoshop, Illustrator, InDesign, Lightroom,
							Material Design.
						</p>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
