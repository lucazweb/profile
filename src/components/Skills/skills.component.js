import React from 'react';
import { SkillList, SkillListItem } from './skills.styled';

const skillsCollection = [
  {
    title: 'HTML5 / CSS3, Flexbox, Sass, Css in JS, CSS animations;'
  },
  {
    title: 'Modern Javascript, Basic Typescript;'
  },
  {
    title: 'Angular JS, Ionic 1.x, NodeJS, React, React Native, Redux, Redux Thunk;'
  },  
  {
    title: 'Tests with Jest and Enzyme;'
  },  
  {
    title: 'PHP / Basic MySQL, Wordpress, Django;'
  },
  {
    title: 'GIT, Scrum workflow;'
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