import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Main from './components/Main';
import Footer from './components/Footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		textDecoration: 'none',
		marginRight: theme.spacing(2)
	},
	appBar: {
		backgroundColor: '#fff'
	},
	title: {
		flexGrow: 1
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	}
}));

export default function App() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<div style={{ marginBottom: 60 }}>
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}>
					<Toolbar>
						<IconButton
							edge='start'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							className={clsx(classes.menuButton, open && classes.hide)}>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							<Link style={{ textDecoration: 'none', color: '#757575' }} to='/'>
								Liz Kipp
							</Link>
						</Typography>

						<Drawer
							className={classes.drawer}
							varient='temporary'
							anchor='left'
							open={open}
							classes={{
								paper: classes.drawerPaper
							}}>
							<div className={classes.drawerHeader}>
								<IconButton onClick={handleDrawerClose}>
									{theme.direction === 'ltr' ? (
										<ChevronLeftIcon />
									) : (
										<ChevronRightIcon />
									)}
								</IconButton>
							</div>
							<Divider />

							<Button color='inherit'>
								<Link to='/About'>About</Link>
							</Button>
							<Button color='inherit'>
								<Link to='/Contact'>Contact</Link>
							</Button>
							<Button color='inherit'>
								<Link to='/Projects'>Projects</Link>
							</Button>
						</Drawer>
					</Toolbar>
				</AppBar>
			</div>

			<Main />
			<Footer />
		</div>
	);
}
