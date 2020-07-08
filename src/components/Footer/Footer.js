import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Footer.css';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from 'react-router-scroll-top';
import Butter from '../../img/butter.png';

AOS.init();

class Footer extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<Grid container className='gradiantBkgd'>
					<Grid item lg={8}>
						<div data-aos='fade-up' data-aos-duration='2000'>
							<Typography variant='h3' className='workTogther'>
								Let's Work Together
							</Typography>

							<Typography variant='h5' className='workTogther'>
								I'm eager. I'm Willing.&nbsp;
								<Typography variant='h5' className='rwd-break workTogther'>
									{' '}
									I'm looking forward to it.
								</Typography>
							</Typography>
						</div>
					</Grid>
					<Grid container>
						<Grid item xs={12} className='btnGrid'>
							<div data-aos='fade-up' data-aos-duration='2000'>
								<Link style={{ textDecoration: 'none' }} to='/Contact'>
									<Button
										style={{ padding: 10, margin: 10 }}
										size='large'
										className='contact-button ghost ghost-white'>
										Contact Me
									</Button>
								</Link>
								<Link
									style={{ textDecoration: 'none' }}
									to='../liz-kipp-resume.pdf'
									target='_blank'
									download>
									<ScrollToTop />
									<Button
										style={{ padding: 10, margin: 10 }}
										size='large'
										className='contact-button ghost ghost-white btn-btn'>
										Resume
									</Button>
								</Link>
							</div>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					container
					style={{
						display: 'flex',
						justifyContent: 'center'
					}}>
					<Grid item>
						<h3 className='connect-footer'>Connect</h3>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={12} className='socialLinks'>
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
					</Grid>

					<Grid container className='butter'>
						<Grid item>
							<Typography>
								Blog created with
								<a
									href='https://buttercms.com'
									target='_blank'
									rel='noopener noreferrer'>
									<img src={Butter} alt='butter logo' />
								</a>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Footer;
