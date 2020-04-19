import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormattedMessage, defineMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { StyledList, StyledListItem, ExternalLink } from './menu.styled';
import resumePdfFile from '../../assets/lucas_santos_resume.pdf';

const messages = defineMessage({
  aboutLink: {
    id: "AboutLink",
    defaultMessage: "About"
  },
  resumeLink: {
    id: "ResumeLink",
    defaultMessage: "Resume"
  },
});

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
            <Link to='/about'> 
              <FormattedMessage {...messages.aboutLink } />
            </Link>
          </StyledListItem>
        )
      }

      <StyledListItem>
        <ExternalLink href={resumePdfFile} target="_blank"> 
        <FormattedMessage {...messages.resumeLink } />
        </ExternalLink>
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