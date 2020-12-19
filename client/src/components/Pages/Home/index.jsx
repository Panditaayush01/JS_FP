import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

var textStyle = {
  color: `red`
}


const Home = () => {
  return (
    <>
      <Header title="Welcome to The United Church">
        <p className="text-light">
          Our Vision is to attract children of God towards
          their God. We follow principles of Jesus and work towards to betterment of mankind. <br />
          <strong>Let's Pray.....</strong>
        </p>

        <p className="text-light">
          Login to Our Church portal and view the latest service last Sunday.
        </p>
      </Header>

      <Container>
        <h3 style={textStyle}>Our Values</h3>
        <hr />
        <p>
          We believe in Love, Care and Devotion towards God and its creations.
          </p>

        <h4 style={textStyle}>Faith and the bible</h4>

        <p>The Bible is the shared standard for our faith, but members are not required to adhere to any particular creed or formulation of doctrine.</p>

        <h4 style={textStyle}>Bapitism and Communion</h4>

        <p>The United Church celebrates two sacraments—baptism and communion—by which we encounter the presence and goodness of God.</p>
      </Container>
    </>
  );
}

export default Home;