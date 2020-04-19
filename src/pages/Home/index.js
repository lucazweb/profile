import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Header, Profile } from '../../components';

const Home = () => (
    <Row center="xs">
        <Col xs={10} sm={10} md={10}>
            <Header />
            <Profile />
        </Col>
    </Row>
)

export default Home;