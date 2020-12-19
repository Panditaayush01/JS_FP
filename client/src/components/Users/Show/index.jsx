import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container, Media } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';

const Show = () => {
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
      .then(({ data }) => {
        setUserDetails(data);
      });
  }, []);

  return (
    userDetails ? (
      <>
        <Header title="Admin's Profile">
          <p className="text-light">
            <strong>This is the Profile of the church's admin</strong>
          </p>
        </Header>

        <Container>
          <p>
            Wishes to all, my name is Aayush and I am the admin of this website.
          </p>

          <Media>
            <img
              src="https://portcitycollision.com/wp-content/uploads/2014/08/user.png"
              width={150}
              height={150}
              className="mr-3"
            />
            <Media.Body>
              <h5>{userDetails.name}</h5>
              <p>
                <strong>Email:</strong>&nbsp;{userDetails.email}
              </p>

              <p>
                <strong>Since:</strong>&nbsp;{userDetails.createdAt}
              </p>

              <p>
                <Link className="btn btn-info" to="/profile/edit">Edit profile..</Link>
              </p>
            </Media.Body>
          </Media>
        </Container>
      </>
    ) : null
  );
}

export default Show;