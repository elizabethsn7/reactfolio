import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ReactTypingEffect from 'react-typing-effect';
import LizKipp from '../img/LizKipp.jpg';

const styles = {
	description: {
		padding: '0 45px',
		maxWidth: '600px',
		color: '#fff',
		fontFamily: ['Rubik', 'sans-serif'],
		fontSize: '24px',
		lineHeight: '35px'
	}
};
class About extends Component {
	render() {
		return (
			<div className='root'>
				<Grid container spacing={3}>
					<Grid item xs={12} className='about-grid'>
						<h1
							style={{
								fontFamily: ['Rubik', 'sans-serif'],
								fontWeight: 300,
								color: '#fff',
								padding: '0 45px'
							}}>
							Me Me Me
						</h1>

						<p style={styles.description}>
							I am passionate about problem-solving and the desire to keep
							learning as technologies change. I am currently seeking a
							full-time position with a company that encourages innovation and
							creativity.
						</p>
					</Grid>

					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<h1 style={{ color: '#3f3f3f', padding: '0 45px' }}>
							<i className='fas fa-music' />{' '}
							<ReactTypingEffect
								text='You can call me Al'
								speed={100}
								eraseDelay={2000}
							/>
							<i className='fas fa-music' />
						</h1>
					</Grid>
					<Grid item sm={4}>
						<img className='profileImg' src={LizKipp} alt='profile' />
					</Grid>
					<Grid item sm={8}>
						<p className='lead'>
							Actually, don't call me that, it's a just a line from a Paul Simon
							song. <br />
							For over fifteen years I was an innocent and naive freelance
							photographer happily clicking away. Then, one day, I came upon the
							beautiful complexity and entanglement of coding. It was love at
							first sight. I became challenged in a way I hadn’t been before and
							the desire to learn more about it was too strong to turn away.
							<br />
							Because of my previous professional experience, I bring to the
							table the unicornian (yeah, I made that up) magic of design and
							development.
						</p>
					</Grid>
					<Grid
						container
						style={{
							width: ' 100%',
							background: '#F5F5F5'
						}}>
						<Grid item xs={12} style={{ textAlign: 'center' }}>
							<h2>I'm really great.</h2>
							<br></br>
							<h3>Just ask my mom, she thinks so.</h3>
						</Grid>

						<div className='about-icons'>
							<Grid container>
								<Grid item xs={12} md={4}>
									<i className='fas fa-heart'>
										<span>I bring emotion</span>
									</i>
									<p className='im-great'>
										I'm not talking about over the top foo foo emotions, I'm
										talking emotions that empower, emotions that can only be
										fueled by passion for doing what you love.
									</p>
								</Grid>
								<Grid item xs={12} md={4}>
									<i className='fas fa-rocket'>
										<span>I'm a team player</span>
									</i>
									<p className='im-great'>
										Being a part of a team has been ingrained. Growing up in the
										midwest as the middle child of five kids, I didn't have a
										choice. I had to be a team player, however, it also taught
										me that if I wanted my voice heard I had to be quick and
										able to work on my own.
									</p>
								</Grid>
								<Grid item xs={12} md={4}>
									<i className='fas fa-pencil-ruler'>
										<span>I design extraordinary</span>
									</i>
									<p className='im-great'>
										I am a trained Photographer. I come with a built in design
										minded background. The Adobe Creative Suite is my friend and
										we've been hanging out for quite some time now.
									</p>
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default About;
