import styled from 'styled-components';
import { Color } from '..';

export const StyledList = styled.ul`
  display: flex;
  margin: 10px 0;
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  margin: 0 12px;  
  background: #f3f3f3;

  &:first-child{
    margin-left: 0;
  }

  &:hover {
    background: ${Color.highlight};
  }

  a {
    text-decoration: none;
    color: ${Color.textColor};
    font-size: .8rem;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
`;