import React from "react";
import { Card } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="container py-4">
      <Card>
        <Card.Body>
          <h2>About Us</h2>
          <p>
            Welcome to our web tool! This tool is designed to provide a simple
            and efficient solution to help users . We understand the challenges
            faced by users in their daily tasks, and we are committed to making
            their lives easier.
          </p>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <h3>Our Vision</h3>
          <p>
            Our vision is to provide a user-friendly and efficient web tool that
            empowers individuals and businesses to provide ease in manipulating
            the texts. We strive to deliver high-quality services and cater to
            our users' needs with continuous improvements and innovations.
          </p>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <h3>Our Team</h3>
          <p>
            We are a dedicated team of developers and designers with a passion
            for creating valuable tools for our users. Our diverse backgrounds
            and expertise allow us to collaborate and deliver exceptional
            products. Together, we work tirelessly to ensure that our web tool
            remains cutting-edge and user-friendly.
          </p>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <h3>Testimonials</h3>
          <blockquote className="blockquote">
            <p className="mb-0">
              "Your web tool is simply amazing! It has made my life so much
              easier."
            </p>
            <footer className="blockquote-footer">- Happy User</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutPage;
