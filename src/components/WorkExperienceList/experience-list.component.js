import React from "react";
import { TimelineList } from "./experience-list.styled";
import { ExternalLink } from '../Menu/menu.styled';
import { localData } from "./localdata";
import resumePDF from '../../assets/lucas_santos_front_end_cv.pdf';

const ListItem = props => (
  <li>
    <span></span>
    <h3 className="title">{props.title}</h3>
    <small style={{textAlign: 'left'}}>{props.time}</small>
    <p>{props.description}</p>
    { props.lastItem && 
      (
        <ExternalLink href={resumePDF} target="_blank">
          More info
        </ExternalLink>
      ) 
    }
  </li>
);

export const ExperienceList = () => (
  <TimelineList>
      <ul>
        {
          localData.map((experience, i) => (
            <ListItem {...experience} lastItem={ i === localData.length - 1 } />       
          ))
        }
      </ul>
  </TimelineList>
);
