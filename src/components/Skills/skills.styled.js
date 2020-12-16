import styled from "styled-components";
import { Space, Color } from "..";

export const SkillList = styled.ul`
  margin: ${Space.medium}px 0 0 0;
  padding: 0 12px;
  list-style: none;
`;

export const SkillListItem = styled.li`
  text-align: left;
  margin-bottom: ${Space.medium}px;
  font-size: 0.7rem;
  line-height: 1.1rem;
  &:hover {
    color: ${Color.textLinkHover};
  }
`;
