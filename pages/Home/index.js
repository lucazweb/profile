import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';

const Home = () => (
    <Row center="md">
        <Col xs={12} sm={12} md={10}>
            <Header />
            <Profile />
        </Col>
    </Row>
)

export default Home;