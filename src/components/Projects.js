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
import IconButton from '@material-ui/core/IconButton';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Collapse from '@material-ui/core/Collapse';
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
	projectsGrid: {
		display: 'flex',
		justifyContent: 'center'
	},
	cardyB: {
		maxWidth: 400
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	actionBottom: {
		background: '#F5F5F5'
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

	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
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
			<Box className={classes.projectsGrid}>
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
									<IconButton
										className={clsx(classes.expand, {
											[classes.expandOpen]: expanded
										})}
										onClick={handleExpandClick}
										aria-expanded={expanded}
										aria-label='show more'>
										<UnfoldMoreIcon />
									</IconButton>
								</CardActions>
								<Collapse in={expanded} timeout='auto' unmountOnExit>
									<CardContent>
										<Typography variant='body1' component='span'>
											Users are able to access information about a variety of
											movies, directors, ratings, and genres. They are able to
											sign up, update their personal information, and create a
											list of their favorite movies.
										</Typography>
										<br></br>
										<Typography variant='body1'>
											<strong>Technologies used:</strong>{' '}
										</Typography>
										<Typography variant='body1'>
											HTML, CSS, JavaScript, React, Bootstrap, NoSQL, MongoDB,
											Express, Passport, bcrypt
										</Typography>
									</CardContent>
								</Collapse>
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
									<Button>
										<a
											href='https://github.com/elizabethsn7/meetup-two'
											target='_blank'
											rel='noopener noreferrer'>
											Github
										</a>
									</Button>
									<IconButton
										className={clsx(classes.expand, {
											[classes.expandOpen]: expanded
										})}
										onClick={handleExpandClick}
										aria-expanded={expanded}
										aria-label='show more'>
										<UnfoldMoreIcon />
									</IconButton>
								</CardActions>
								<Collapse in={expanded} timeout='auto' unmountOnExit>
									<CardContent>
										<Typography variant='body1' component='span'>
											A serverless progressive web app built with React using
											TDD technique. The application uses the Meetup API to
											fetch upcoming events for a selected city.
										</Typography>
										<br></br>
										<Typography variant='body1'>
											<strong>Technologies used:</strong>{' '}
										</Typography>
										<Typography variant='body1'>
											Unit, Integration, User Acceptance and End-to-End Testing,
											OOP, React, React Bootstrap{' '}
										</Typography>
									</CardContent>
								</Collapse>
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
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'>
								<UnfoldMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography variant='body1' component='span'>
									Advanced Angular concepts, from templates and data binding to
									interpolation and routing. I encorporated Angular Material for
									the UI design components.
								</Typography>
								<br></br>
								<Typography variant='body1'>
									<strong>Technologies used:</strong>{' '}
								</Typography>
								<Typography variant='body1'>
									TypeScript, Javascript, Angular Material, GitHub Pages
								</Typography>
							</CardContent>
						</Collapse>
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
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'>
								<UnfoldMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography variant='body1' component='span'>
									An SPA where users are able to create, edit, complete, and
									delete items from a list.
								</Typography>
								<br></br>
								<Typography variant='body1'>
									<strong>Technologies used: </strong>{' '}
								</Typography>

								<Typography variant='body1'>
									HTML, CSS, Vue.js, Vue Material, GitHub
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</TabPanel>
			</Box>
		</ThemeProvider>
	);
}
