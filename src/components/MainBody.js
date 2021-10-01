import React , {useState} from 'react';
import { BrowserRouter as Router, Link, Route  } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './css/MainBody.css';


import SinglePost from './SinglePost';
export default function MainBody () {
	const postLists2 = [];
	const postLists = [
			{
				id : 1,
				title : "This is title",
				time : "19th september 2021",
				body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
 			},
 			{
				id : 2,
				title : "This is title",
				time : "19th september 2021",
				body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
 			}
		];
	if ( postLists.length === 0 ) {
		return (
			<Container className="main-body">
			<Row>
				<p>No Result found.</p>
			</Row>
			</Container>
		)
	} 
	return(
		<Container className="main-body">
		  <Row>
		  <Col sm={8}> {/* post section*/} 
		  	{
		  		postLists.map( post => (
			        <div key={post.id}>
                        <h2>{post.title}</h2>
                        <small>{post.time}</small>
                        <p>{post.body}</p>
                        <Link className="btn btn-success" to={`/single-post/${post.id}`}>view</Link>
                    </div>
			      )
		  		)
		  	}
		    </Col>
		    
		    <Col sm={4}>  {/*side bar section*/}
		    	this is a menu in the right side 
		    </Col>
		  </Row>
		</Container>
		
	);
}