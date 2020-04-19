import styled from 'styled-components';
import { Space } from '..';

export const RepoList =  styled.ul`
  margin: ${Space.medium}px 0 0 0; 
  padding: 0;
`;

export const RepoListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 14px;
  width: 100%;
  height: 60px;
  margin-bottom: ${Space.medium}px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const RepoTitle = styled.h3`
  margin: 0;
  font-size: .7rem;
`;

export const RepoDesc = styled.span`
  font-size: .7rem;
  color: #333;
`;