
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-page" id='about'>
      <Container>
        <Row>
          <Col md={6} className="about-content">
            <h2>About Our Movie Website</h2>
            <p>
              Welcome to our movie website! We aim to provide you with the latest information about movies, reviews, trailers, and more.
            </p>
            <p>
              Our team is dedicated to delivering high-quality content and ensuring you have the best movie-watching experience.
            </p>
            <Button variant="primary" size="sm" style={{ width: '100px' }}>Get Started</Button>
          </Col>
          <Col md={6} className="about-image">
            <Image src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
