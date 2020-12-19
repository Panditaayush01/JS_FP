import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
    return (
        <>
            <Header title="Sermons">
                <p className="text-light">The Church's Sunday Worship Service</p>
            </Header>

            <Container>
                <Form endpoint="sermons" />
            </Container>
        </>
    );
}

export default New;