import React from 'react';
import { Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles = makeStyles(theme => ({
	icons: {
		fontSize: 50,
		color: '#ff7676'
	},
	skillsContainer: {
		background: '#fff',
		padding: '1.75em',
		marginBottom: '1.5em'
	},
	p: {
		fontSize: 16,
		fontWeight: 300,
		fontFamily: ['Rubik', 'sans-serif'],
		lineHeight: '1.8',
		color: '#7e8890'
	},
	h3: {
		margin: '1.414em 0 .5em',
		fontSize: '1.25em',
		fontFamily: ['Rubik', 'sans-serif'],
		lineHeight: '1.8',
		color: '#374352',
		textAlign: 'center'
	}
}));

export default function LandingPage() {
	const classes = useStyles();

	return (
		<div style={{ width: '100%', margin: 'auto' }}>
			<Grid className='landingGrid'>
				<Cell col={12}>
					<div data-aos='fade-up' data-aos-duration='2000'>
						<div className='bannerText'>
							<h1>I'm a web developer based in Austin, Tx</h1>
							<h3>
								A photographer turned web developer. That's right, I went to the
								dark side.
							</h3>
						</div>

						{/* START: My Skills section */}
						<Container style={{ background: '#F3F3F3', maxWidth: '100%' }}>
							<Grid
								container
								style={{ display: 'flex', justifyContent: 'space-around' }}>
								<Grid item xs={12}>
									<h2 style={{ textAlign: 'center', padding: 30 }}>
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
										Photography, Adobe Photoshop, Illustrator, InDesign,
										Lightroom, Material Design.
									</p>
								</Grid>
							</Grid>
						</Container>
						{/* END: My Skills section */}

						{/* <hr />
              <p className='skills'>
                <span>
                  <i className='fab fa-react' aria-hidden='true' />
                </span>
                <span>
                  <i className='fab fa-angular' aria-hidden='true' />
                </span>
                <span>
                  <i className='fab fa-vue' aria-hidden='true' />
                </span>
                <span>
                  <i className='fab fa-js-square' aria-hidden='true'></i>
                </span>
                <span>
                  <i className='fab fa-node' aria-hidden='true' />
                </span>

                <span>
                  <i className='fab fa-js-square' aria-hidden='true' />
                </span>
              </p> */}
					</div>
				</Cell>
			</Grid>
		</div>
	);
}
