import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sermons = () => {
    const { setNotification } = useContext(NotificationContext);
    const { globalStore } = useContext(GlobalStoreContext);
    const { user } = useContext(UserContext);

    const [sermons, setSermons] = useState([]);

    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/sermons`)
            .then(({ data }) => {
                setSermons(data);
            })
            .catch(error => {
                setNotification({
                    type: "danger",
                    message: `There was an error retrieving the Sermon: ${error.message}`
                });
            });
    }, [globalStore, setNotification]);

    return (
        <>
            <Header title="Sermons" />

            <Container>
                {sermons && sermons.length > 0 ? (
                    sermons.map((sermon, i) => (
                        <>
                            <Media className="mb-3">
                                <img
                                    src="https://picsum.photos/id/1000/1010"
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                />
                                <Media.Body>
                                    <h3>{sermon.sermon}</h3>
                                    <p>
                                        <strong>Creater:</strong>&nbsp;{sermon.author}
                                    </p>

                                    <p>
                                        <strong>Description</strong>&nbsp;{sermon.description}
                                    </p>
                                    <p>
                                        <strong>Posted On -</strong>&nbsp;{sermon.dateOfPublish}
                                    </p>
                                </Media.Body>
                            </Media>
                            {user && user.token ? (
                                <Link className="btn btn-primary mb-3 mr-2" to={`/sermons/edit/${sermon._id}`}>Edit Sermon</Link>
                            ) : null}

                            {user && user.token ? (
                                <Link className="btn btn-danger mb-3" to={`/sermons/destroy/${sermon._id}`}>Delete Sermon</Link>
                            ) : null}
                        </>
                    ))
                ) : null}
            </Container>
        </>
    );
}

export default Sermons;