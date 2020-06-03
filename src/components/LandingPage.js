import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
	render() {
		return (
			<div className='footer-container'>
				<h3 className='connect-footer'>Let's Connect</h3>
				<div className='socialLinks'>
					<Grid item sm={6}>
						<a
							href='https://www.linkedin.com/in/elizabethsn7/'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fa fa-linkedin-square' aria-hidden='true' />
						</a>
						<a
							href='https://github.com/elizabethsn7'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fa fa-github-square' aria-hidden='true' />
						</a>
						<a
							href='http://instagram.com'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-instagram-square' aria-hidden='true' />
						</a>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Footer;
