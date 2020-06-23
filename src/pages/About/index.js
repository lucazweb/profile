import React from "react";
import {
  H3,
  ExperienceList,
  SkillsList,
  ProjectList,
  SecondaryHeader,
} from "../../components";
import { Row, Col } from "react-flexbox-grid";
import { FormattedMessage, defineMessage } from "react-intl";
import Emoji from "a11y-react-emoji";

const messages = defineMessage({
  professionalCatTitle: {
    id: "ProfessionalCategoryTitle",
    defaultMessage: "Professional Background",
  },
  skillsCatTitle: {
    id: "SkillsCategoryTitle",
    defaultMessage: "Skills",
  },
  projectsCatTitle: {
    id: "ProjectsCategoryTitle",
    defaultMessage: "Some projects",
  },
});

const About = () => (
  <Row center="xs">
    <Col xs={10} sm={12} md={10}>
      <SecondaryHeader />
      <Row between="md">
        <Col md={5}>
          <H3>
            <FormattedMessage {...messages.professionalCatTitle} />
          </H3>
          <ExperienceList />
        </Col>
        <Col md={4}>
          <H3>
            <FormattedMessage {...messages.skillsCatTitle} />
          </H3>
          <SkillsList />
        </Col>
        <Col md={3}>
          <H3>
            <FormattedMessage {...messages.projectsCatTitle} />
            <Emoji
              style={{ marginLeft: 8 }}
              symbol="🚀"
              label="a rocket blasting off"
            />
          </H3>
          <ProjectList />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default About;
