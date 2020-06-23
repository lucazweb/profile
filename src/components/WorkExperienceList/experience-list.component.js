import React, { useState } from "react";
import { TimelineList } from "./experience-list.styled";
import { ExternalLink } from "../Menu/menu.styled";
import { localData } from "./localdata";
import resumePDF from "../../assets/lucas_santos_front_end_cv.pdf";

const ListItem = (props) => {
  const { time, role, description, lastItem, startOpen } = props;

  const [display, setDisplay] = useState(startOpen);

  const handleDisplay = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <li>
      <span></span>
      <h3 onClick={() => handleDisplay()} className="title">
        {props.title}
      </h3>
      {display && (
        <>
          <small>{time}</small>
          <small>{role}</small>
          <p>{description}</p>
          {lastItem && (
            <ExternalLink href={resumePDF} target="_blank">
              More info
            </ExternalLink>
          )}
        </>
      )}
    </li>
  );
};

export const ExperienceList = () => (
  <TimelineList>
    <ul>
      {localData.map((experience, i) => (
        <ListItem
          index={i}
          {...experience}
          startOpen={i === 0 || i === 1 ? true : false}
          lastItem={i === localData.length - 1}
        />
      ))}
    </ul>
  </TimelineList>
);
