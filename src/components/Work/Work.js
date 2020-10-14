import React from 'react';
import PropTypes from 'prop-types';

import './Work.css';
import {makeStyles, createMuiTheme, ThemeProvider, Tab, Tabs, Box, Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import MyFlixHome from '../../img/myFlixHome.jpg';
import Meetup from '../../img/meetup.jpg';
import AngularQuiz from '../../img/angular-quiz.jpg';
import Vue from '../../img/vue-js.jpg';
import DashCamp from '../../img/dash-camp.png';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		color: '#000'
	},
	cardyB: {
		maxWidth: 450,
		margin: 'auto'
	},
	actionBottom: {
		background: '#F5F5F5'
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: theme.spacing(1, 2),
		marginLeft: 10
	}
}));

const theme = createMuiTheme({
	props: {
		MuiTypography: {
			variantMapping: {
				body1: 'span'
			}
		}
	}
});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

export default function Work() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container style={{ justifyContent: 'center' }}>
				<Grid item>
					<AppBar className={classes.root} position='static'>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='simple tabs example'>
							>
							<Tab label='React' {...a11yProps(0)} />
							<Tab label='Vue' {...a11yProps(1)} />
							<Tab label='Angular' {...a11yProps(2)} />
						</Tabs>
					</AppBar>
				</Grid>
			</Grid>

			<Box style={{ display: 'flex', justifyContent: 'center' }}>
				<TabPanel value={value} index={0}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Card className={classes.cardyB}>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='Contemplative Reptile'
										image={MyFlixHome}
										title='My Flix Movie Api'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5'>
											A Movie API built using MERN.
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions disableSpacing className={classes.actionBottom}>
									<Accordion>
										<AccordionSummary
											style={{ display: 'flex' }}
											expandIcon={<UnfoldMoreIcon />}
											aria-controls='panel1a-content'
											id='panel1a-header'>
											<Button>
												<a
													href='https://github.com/elizabethsn7/myFlix'
													target='_blank'
													rel='noopener noreferrer'>
													Github
												</a>
											</Button>
											<Button>
												<a
													href='https://liz-flix.herokuapp.com/client/'
													target='_blank'
													rel='noopener noreferrer'>
													Live Demo
												</a>
											</Button>
											<div className={clsx(classes.helper)}>
												<Typography>Read More</Typography>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<Typography variant='body1'>
												Users are able to access information about a variety of
												movies, directors, ratings, and genres. They are able to
												sign up, update their personal information, and create a
												list of their favorite movies.
												<br></br>
												<strong>Technologies used:</strong> <br></br>
												HTML, CSS, JavaScript, React, Bootstrap, NoSQL, MongoDB,
												Express, Passport, bcrypt
											</Typography>
										</AccordionDetails>
									</Accordion>
								</CardActions>
							</Card>
						</Grid>

						{/* Meetup Card */}
						<Grid item xs={12} sm={6}>
							<Card className={classes.cardyB}>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='Meetup Events'
										image={Meetup}
										title='Meetup Events'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5'>
											A Serverless PWA.
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions disableSpacing className={classes.actionBottom}>
									<Accordion>
										<AccordionSummary
											expandIcon={<UnfoldMoreIcon />}
											aria-controls='panel1a-content'
											id='panel1a-header'>
											<Button>
												<a
													href='https://github.com/elizabethsn7/meetup-two'
													target='_blank'
													rel='noopener noreferrer'>
													Github
												</a>
											</Button>
											<div className={clsx(classes.helper)}>
												<Typography>Read More</Typography>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<Typography variant='body1'>
												A serverless progressive web app built with React using
												TDD technique. The application uses the Meetup API to
												fetch upcoming events for a selected city.
												<br></br>
												<strong>Technologies used:</strong> <br></br>
												Unit, Integration, User Acceptance and End-to-End
												Testing, OOP, React, React Bootstrap{' '}
											</Typography>
										</AccordionDetails>
									</Accordion>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</TabPanel>

				{/* Vue Card */ }
				<TabPanel value={ value } index={ 1 }>
					<Grid container spacing={2}>
						<Grid item xs={ 12 } sm={ 6 }>
							<Card className={classes.cardyB}>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='Dash Camp'
										image={DashCamp}
										title='Dash Camp'
									/>
								<CardContent>
								<Typography gutterBottom variant='h5'>
									Dash Camp Dashboard
								</Typography>
								</CardContent>
								</CardActionArea>
								<CardActions disableSpacing className={classes.actionBottom}>
									<Accordion>
										<AccordionSummary
											expandIcon={<UnfoldMoreIcon />}
											aria-controls='panel1a-content'
											id='panel1a-header'>
											<div className={clsx(classes.helper)}>
												<Typography>Read More</Typography>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<Typography variant='body1'>
												Dash Camp is an interactive virtual experience for young children.
												<br></br>
												<strong>Technologies used: </strong> <br></br>
												HTML, CSS, Vue.js, Bootstrap, Typescript, Git
											</Typography>
										</AccordionDetails>
									</Accordion>
								</CardActions>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Card className={classes.cardyB}>
								<CardActionArea>
									<CardMedia
										component='img'
										alt='Vue Todo App'
										image={Vue}
										title='Vue.js ToDo'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5'>
											Vue.js Todo App
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions disableSpacing className={classes.actionBottom}>
									<Accordion>
										<AccordionSummary
											expandIcon={<UnfoldMoreIcon />}
											aria-controls='panel1a-content'
											id='panel1a-header'>
											<Button>
												<a
													href='https://github.com/elizabethsn7/vue-todo'
													target='_blank'
													rel='noopener noreferrer'>
													Github
												</a>
											</Button>
											<Button>
												<a
													href='https://elizabethsn7.github.io/vue-todo/'
													target='_blank'
													rel='noopener noreferrer'>
													Live Demo
												</a>
											</Button>
											<div className={clsx(classes.helper)}>
												<Typography>Read More</Typography>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<Typography variant='body1'>
												An SPA where users are able to create, edit, complete, and
												delete items from a list.
												<br></br>
												<strong>Technologies used: </strong> <br></br>
												HTML, CSS, Vue.js, Vue Material, GitHub
											</Typography>
										</AccordionDetails>
									</Accordion>
								</CardActions>
									</Card>
						</Grid>
						</Grid>
						</TabPanel>
					
				{/* Angular Card */}
				<TabPanel value={value} index={2}>
					<Card className={classes.cardyB}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Angular Quiz'
								image={AngularQuiz}
								title='Angular Quiz'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5'>
									Angular
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions disableSpacing className={classes.actionBottom}>
							<Accordion>
								<AccordionSummary
									expandIcon={<UnfoldMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'>
									<Button>
										<a
											href='https://github.com/elizabethsn7/angular-quiz'
											target='_blank'
											rel='noopener noreferrer'>
											Github
										</a>
									</Button>
									<Button>
										<a
											href='https://elizabethsn7.github.io/angular-quiz/'
											target='_blank'
											rel='noopener noreferrer'>
											Live Demo
										</a>
									</Button>
									<div className={clsx(classes.helper)}>
										<Typography>Read More</Typography>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography variant='body1'>
										Advanced Angular concepts, from templates and data binding
										to interpolation and routing. I encorporated Angular
										Material for the UI design components.
										<br></br>
										<strong>Technologies used:</strong> <br></br>
										TypeScript, Javascript, Angular Material, GitHub Pages
									</Typography>
								</AccordionDetails>
							</Accordion>
						</CardActions>
					</Card>
				</TabPanel>
			</Box>
		</ThemeProvider>
	);
}
