import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { FormattedMessage, defineMessage } from 'react-intl';
import { 
  ProfileRow, 
  ProfilePhoto, 
  StyledParagraph, 
  StyledTitle 
} from './profile.styled';
import { Menu } from '../Menu/menu.component';

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
    <ProfileRow middle="md">
        <Col md={4}>
          <ProfilePhoto />
        </Col>

        <Col md={8}>
          <StyledTitle>
            <FormattedMessage {...messages.welcome } />
          </StyledTitle>

          <StyledParagraph>
            <FormattedMessage {...messages.profile } />
          </StyledParagraph>

          <Row>
            <Col xs={12} md={12}>
              <Menu />
            </Col>
          </Row>
        </Col>

    </ProfileRow>
);