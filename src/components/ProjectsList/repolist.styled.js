import styled from "styled-components";
import { Space, Color } from "..";

export const RepoList = styled.ul`
  margin: ${Space.medium}px 0 0 0;
  padding: 0;
`;

export const RepoListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 14px;
  width: 100%;
  min-height: 60px;
  margin-bottom: ${Space.medium}px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:hover {
    border-color: ${Color.textLinkHover};
    color: ${Color.textLinkHover};
  }
`;

export const RepoTitle = styled.h3`
  margin: 0;
  font-size: 0.7rem;
`;

export const RepoDesc = styled.span`
  font-size: 0.7rem;
  color: #333;
`;

export const StyledA = styled.a`
  text-align: left;
  width: 100%;
  font-size: 0.8em;
  display: block;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
