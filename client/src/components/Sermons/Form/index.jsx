import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const SermonForm = ({ endpoint, preload, buttonLabel }) => {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);
    const { setNotification } = useContext(NotificationContext);
    const { user } = useContext(UserContext);
    const { globalStore } = useContext(GlobalStoreContext);

    useEffect(() => {
        setInputs({ ...preload });
    }, [preload])

    const handleChange = event => {
        event.persist();
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(inputs);

        Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
            ...inputs,
            secret_token: (user && user.token)
        })
            .then(({ data }) => {
                if (data) {
                    setNotification({
                        type: "success",
                        message: "The Sermon was updated successfully"
                    });
                }

                setRedirect(true);
            })
            .catch((error) => {
                setNotification({
                    type: "danger",
                    message: `There was an error updating the Sermon: ${error.message}`
                });
            });
    };

    if (redirect) return <Redirect to="/sermons" />;
    return (
        <Form onSubmit={handleSubmit}>
            <p>
                Please enter Sermon details.
            </p>

            <Form.Group>
                <Form.Label>Sermon title</Form.Label>
                <Form.Control
                    name="sermon"
                    onChange={handleChange}
                    placeholder="Last Sunday service"
                    required
                    defaultValue={inputs.sermon}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name="description"
                    as="textArea"
                    rows={4}
                    onChange={handleChange}
                    placeholder="What were the learnings..."
                    required
                    defaultValue={inputs.description}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date of Recording</Form.Label>
                <Form.Control
                    name="date"
                    type="date"
                    onChange={handleChange}
                    required
                    defaultValue={inputs.date}
                />
            </Form.Group>

            <button type="submit" className="btn btn-primary">{buttonLabel || "Add Sermon"}</button>
        </Form>
    );
}

export default SermonForm;