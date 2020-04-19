import React from "react";
import { TimelineList } from "./experience-list.styled";

const ListItem = () => (
  <li>
    <span></span>
    <h3 className="title">Work Experience, Jan 2012 - Ago 2014</h3>
    <p>fjakfjsodajfoisadjoifjsaojfoiasjofjasojfoiasjdofjsaodjfjs</p>
  </li>
);


export const ExperienceList = () => (
  <TimelineList>
      <ul>
        <ListItem />     
        <ListItem />     
        <ListItem />     
        <ListItem />     
      </ul>
  </TimelineList>
);
