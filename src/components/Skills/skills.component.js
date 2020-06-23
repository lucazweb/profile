import React from "react";
import { SkillList, SkillListItem } from "./skills.styled";

const skillsCollection = [
  {
    title: "HTML5 / CSS3, Flexbox, Sass, CSS animations;",
  },
  {
    title: "Modern Javascript, Typescript;",
  },
  {
    title:
      "Angular JS, Ionic 1.x, NodeJS, React, React Native, Redux, Redux Thunk;",
  },
  {
    title: "Tests with Jest and Enzyme;",
  },
  {
    title: "PHP / Basic MySQL, Wordpress, Django;",
  },
  {
    title: "GIT, Scrum workflow;",
  },
  {
    title: "UI Interface Design with Figma / Adobe;",
  },
];

export const SkillsList = () => (
  <SkillList>
    {skillsCollection.map((skill, index) => (
      <SkillListItem key={index}>{skill.title}</SkillListItem>
    ))}
  </SkillList>
);
