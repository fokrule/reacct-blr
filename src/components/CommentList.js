import { Container, Row, Col,Form, Button} from 'react-bootstrap';
export default function CommentList (postId) {
	const comments = [
		{
			id : 1,
			comment : "Hey! nice post here"
		},
		{
			id : 1,
			comment : "Hey! nice post here"
		},
		{
			id : 1,
			comment : "Hey! nice post here"
		},
		{
			id : 1,
			comment : "Hey! nice post here"
		},
		{
			id : 1,
			comment : "Hey! nice post here"
		}
	];
	return (
		<Container className="comments">
			{
				comments.map ((comment) => 
					<p>{comment.comment}</p>
				)
			}
		</Container>
	);
}