import React from 'react';
import { SkillList, SkillListItem } from './skills.styled';

const skillsCollection = [
  {
    title: 'HTML5 / CSS3, Sass, Css in JS, CSS animations'
  },
  {
    title: 'Solid and Modern Javascript, ES6, Design Patterns, Babel'
  },
  {
    title: 'Angular JS, NodeJS, React, React Native, Redux, Redux Thunk'
  },
]

export const SkillsList = () => (
  <SkillList>
    { 
    skillsCollection.map((skill, index) => (
      <SkillListItem>
        { skill.title }
      </SkillListItem>
    ))
    }
  </SkillList>
)