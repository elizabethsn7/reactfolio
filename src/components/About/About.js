import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ReactTypingEffect from 'react-typing-effect';
import LizKipp from '../../img/LizKipp.jpg';
import './About.css';
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class About extends Component {
	render() {
		return (
			<div className='root'>
				<Grid container xs={12} className='header-grid'>
					<div data-aos='fade-up' data-aos-duration='2000'>
						<Grid item xs={12} md={8}>
							<h1 className='headerH1'>Me Me Me</h1>
						</Grid>
						<Grid item xs={12} lg={8}>
							<p className='description'>
								I am passionate about problem-solving and the desire to keep
								learning as technologies change. I'm seeking a full-time
								position with a company that encourages innovation and
								creativity.
							</p>
						</Grid>
					</div>
				</Grid>

				<Grid item xs={12} style={{ textAlign: 'center' }}>
					<h1 style={{ color: '#3f3f3f', padding: '0 45px' }}>
						<i className='fas fa-music' style={{ fontSize: 45 }} />{' '}
						<ReactTypingEffect
							text='You can call me Al'
							speed={100}
							eraseDelay={2000}
						/>
						<i className='fas fa-music' style={{ fontSize: 45 }} />
					</h1>
				</Grid>
				<Grid container>
					<Grid item xs={12} md={4} className='picGrid'>
						<img className='profileImg' src={LizKipp} alt='profile' />
					</Grid>
					<Grid item xs={12} md={8}>
						<p className='lead'>
							Actually, don't call me that, it's a just a line from a Paul Simon
							song. <br />
							<br />
							For over fifteen years I was an innocent and naive freelance
							photographer happily clicking away. Then, one day, I came upon the
							beautiful complexity and entanglement of coding. It was love at
							first sight. I became challenged in a way I hadn’t been before and
							the desire to learn more about it was too strong to turn away.
							<br />
							<br />
							Because of my previous professional experience, I bring to the
							table the unicornian (yeah, I made that up) magic of design and
							development.
						</p>
					</Grid>
				</Grid>

				<Grid
					container
					className='greatGrid'
					style={{
						width: ' 100%'
					}}>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<div style={{ color: '#3f3f3f' }}>
							<h2>I'm really great.</h2>

							<h3>Just ask my mom, she thinks so.</h3>
						</div>
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
									choice. I had to be a team player, however, it also taught me
									that if I wanted my voice heard I had to be quick and able to
									work on my own.
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
			</div>
		);
	}
}

export default About;
