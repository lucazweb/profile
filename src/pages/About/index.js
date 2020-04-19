import React from 'react';
import { H3, ExperienceList, SkillsList, ProjectList, SecondaryHeader } from '../../components';
import { Row, Col } from 'react-flexbox-grid';
//import Emoji from 'a11y-react-emoji';

const About = () => (
  <Row center="xs">
    <Col xs={10} sm={12} md={10}>
      <SecondaryHeader />
      <Row>
        <Col md={5}>
          <H3>Professional background</H3>
          <ExperienceList />
        </Col>
        <Col md={4}>
          <H3>Skills </H3>
          <SkillsList />
        </Col>
        <Col md={3}>
          <H3>Some projects <span aria-label="a rocket blasting off" role="img">🚀</span></H3>      
          <ProjectList />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default About;