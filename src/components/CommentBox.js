import { Container, Row, Col,Form, Button} from 'react-bootstrap';
export default function CommentBox () {
	return (
		<Container className="single-post">
			<Form>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
			    <Form.Label>Example textarea</Form.Label>
			    <Form.Control as="textarea" name="comment" rows={3} />
			  </Form.Group>
			  <Button variant="primary" type="submit">
			    Comment
			  </Button>
			</Form>
		</Container>
	);
}