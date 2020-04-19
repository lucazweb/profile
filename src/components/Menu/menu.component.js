import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StyledList, StyledListItem, ExternalLink } from './menu.styled';

export const Menu = () => {
  const location = useLocation();
  return (
  
    <StyledList>
      {
        location.pathname !== '/' && (
          <StyledListItem>
            <Link to='/'> Home </Link>
          </StyledListItem>
        )
      }      
      
      {
        location.pathname !== '/about' && (
          <StyledListItem>
            <Link to='/about'> About </Link>
          </StyledListItem>
        )
      }

      <StyledListItem>
        <Link> Resume </Link>
      </StyledListItem>
  
      <StyledListItem>
        <ExternalLink 
          href="https://www.github.com/lucazweb"
          target="_blank"
        > 
          Github 
        </ExternalLink>
      </StyledListItem>
  
      <StyledListItem>
        <ExternalLink 
          href="https://www.linkedin.com/in/lucazweb"
          target="_blank"
        > 
          LinkedIn
        </ExternalLink>
      </StyledListItem>
  
    </StyledList>
  );
}