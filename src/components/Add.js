import { Container, Row, Col,Form, Button} from 'react-bootstrap';
export default function Add () {
	return (
		<Container className="single-post">
			<Form>
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" placeholder="Normal text" />
  				<br />
			  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
			    <Form.Label>Post body</Form.Label>
			    <Form.Control as="textarea" name="comment" rows={3} />
			  </Form.Group>
			  <Button variant="primary" type="submit">
			    Publish
			  </Button>
			</Form>
		</Container>
	);
}