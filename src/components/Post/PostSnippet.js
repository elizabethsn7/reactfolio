import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Post.css';

const PostSnippet = props => {
	return (
		<div className='post-snippet'>
			<h3>
				<Link
					to={{
						pathname: `/Blog/${props.slug}`,
						state: props
					}}>
					{props.title}
				</Link>
			</h3>
			<p>{props.summary}</p>
			<div>
				By{' '}
				<strong>
					{props.author.first_name} {props.author.last_name}
				</strong>
			</div>
			<span className='publication-date'>
				Published on {moment(props.published).format('YYYY-MM-DD')}
			</span>
		</div>
	);
};
export default PostSnippet;
