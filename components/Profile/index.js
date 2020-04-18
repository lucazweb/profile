import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FormattedMessage, defineMessage } from 'react-intl';

const messages = defineMessage({
    welcome: {
        id: "Welcome",
        defaultMessage: "Hi, I'm a brazilian Front-End Engineer"
    },
    profile: {
        id: "Profile",
        defaultMessage: "A professional passionate about technology and new challenges. Started a professional journey as Interface Designer, then attracted to the world of development. Always seeking to improve technical, communication, teamwork and leadership skills - profile that seeks beyond borders, responsible, disciplined and committed to results. Currently working with React based projects, looking to learn and add with my skills, in the creation and maintenance of high impact products."
    }
})

export const Profile = () => (
    <Row>
        <Col md={4}>
            Image
        </Col>
        <Col md={8}>
            <h1>
                <FormattedMessage {...messages.welcome } />
            </h1>
            <p>
                <FormattedMessage {...messages.profile } />
            </p>
        </Col>
    </Row>
);