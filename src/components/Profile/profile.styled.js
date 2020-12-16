import styled from "styled-components";
import { Breakpoint, Space } from "../Constants";
import { Row } from "react-flexbox-grid";
import photo from "../../assets/lucazweb.jpeg";

export const ProfileRow = styled(Row)`
  margin-top: ${Space.extraLarge}px;
  @media (max-width: ${Breakpoint.sm}em) {
    margin-top: ${Space.medium}px;
  }
`;

export const ProfilePhoto = styled.div`
    width: 220px;
    height: 220px;
    background-color: #f3f3f3;
    background-image: url('${photo}');
    background-size: cover;
    margin: auto;
    border-radius: 50%;
    border: 4px solid #333;
    box-sizing: content-box;
`;

export const StyledParagraph = styled.p`
  text-align: left;
  font-size: 0.9em;
`;

export const StyledTitle = styled.h1`
  text-align: left;
  font-size: 1.3rem;
`;
