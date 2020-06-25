import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import MyFlixHome from '../img/myFlixHome.jpg';
import Meetup from '../img/meetup.jpg';
import AngularQuiz from '../img/angular-quiz.jpg';
import Vue from '../img/vue-js.jpg';

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

export default function Projects() {
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
							<Tab label='Angular' {...a11yProps(1)} />
							<Tab label='Vue' {...a11yProps(2)} />
						</Tabs>
					</AppBar>
				</Grid>
			</Grid>

			<Box style={{ display: 'flex', justifyContent: 'center' }}>
				<TabPanel value={value} index={0}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
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
									<ExpansionPanel>
										<ExpansionPanelSummary
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
										</ExpansionPanelSummary>
										<ExpansionPanelDetails>
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
										</ExpansionPanelDetails>
									</ExpansionPanel>
								</CardActions>
							</Card>
						</Grid>

						{/* Meetup Card */}
						<Grid item xs={12} md={6}>
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
									<ExpansionPanel>
										<ExpansionPanelSummary
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
										</ExpansionPanelSummary>
										<ExpansionPanelDetails>
											<Typography variant='body1'>
												A serverless progressive web app built with React using
												TDD technique. The application uses the Meetup API to
												fetch upcoming events for a selected city.
												<br></br>
												<strong>Technologies used:</strong> <br></br>
												Unit, Integration, User Acceptance and End-to-End
												Testing, OOP, React, React Bootstrap{' '}
											</Typography>
										</ExpansionPanelDetails>
									</ExpansionPanel>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</TabPanel>

				{/* Angular Card */}
				<TabPanel value={value} index={1}>
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
							<ExpansionPanel>
								<ExpansionPanelSummary
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
											href='https://elizabethsn7.github.io/angular-quiz/welcomeangular-quiz'
											target='_blank'
											rel='noopener noreferrer'>
											Live Demo
										</a>
									</Button>
									<div className={clsx(classes.helper)}>
										<Typography>Read More</Typography>
									</div>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography variant='body1'>
										Advanced Angular concepts, from templates and data binding
										to interpolation and routing. I encorporated Angular
										Material for the UI design components.
										<br></br>
										<strong>Technologies used:</strong> <br></br>
										TypeScript, Javascript, Angular Material, GitHub Pages
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</CardActions>
					</Card>
				</TabPanel>
				<TabPanel value={value} index={2}>
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
							<ExpansionPanel>
								<ExpansionPanelSummary
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
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography variant='body1'>
										An SPA where users are able to create, edit, complete, and
										delete items from a list.
										<br></br>
										<strong>Technologies used: </strong> <br></br>
										HTML, CSS, Vue.js, Vue Material, GitHub
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</CardActions>
					</Card>
				</TabPanel>
			</Box>
		</ThemeProvider>
	);
}
