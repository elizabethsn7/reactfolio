import React, { useState, useEffect } from 'react';
import butter from '../../butter-client';
import PostSnippet from '../Post/PostSnippet';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Blog = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	const fetchPosts = async () => {
		setLoading(true);
		setError(false);
		try {
			const response = await butter.post.list({
				page: 1,
				page_size: 10
			});
			setData(response.data);
		} catch (e) {
			setError(`There was an error: ${e.message}`);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const getPosts = () => (
		<div>
			{data.data.map((post, i) => (
				<PostSnippet {...post} key={i} />
			))}
		</div>
	);

	const getContent = () => {
		if (loading) return <p>Fetching posts...</p>;
		if (error) return <p>{error}</p>;
		if (!data) return null;
		return getPosts();
	};

	return (
		<div className='root'>
			<Grid item xs={12} className='header-grid'>
				<div data-aos='fade-up' data-aos-duration='2000'>
					<Grid item xs={12} md={8}>
						<h1 className='headerH1'>Bloggity Blog Blog</h1>
					</Grid>
					<Grid item xs={12} md={8}>
						<p className='description'>Sometimes Funny. Always Authentic.</p>
					</Grid>
				</div>
			</Grid>
			<div className='post'>{getContent()}</div>
		</div>
	);
};

export default Blog;
