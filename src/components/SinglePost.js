import './css/SinglePost.css';
import { Container, Row, Col } from 'react-bootstrap';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
export default function SinglePost ( id ) {
	const post = {
		id : id,
		title : 'this',
		time : '19th september 2021',
		body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	}
	return (
		<Container className="single-post">
			<h2>
				{post.title}
			</h2>
			<small>
				{post.time}
			</small>	
			<div>
				{post.body}
			</div>
			<CommentBox />
			<CommentList />
		</Container>
	);
}