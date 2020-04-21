import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleContext } from '../../Locale.context';
import { FormattedMessage, defineMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { StyledList, StyledListItem, ExternalLink } from './menu.styled';
import resumePdfFile from '../../assets/lucas_santos_resume.pdf';
import resumePdfFileBR from '../../assets/lucas_santos_front_end_cv.pdf';

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
  // eslint-disable-next-line no-unused-vars
  const [locale, setLocale] = useContext(LocaleContext);
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
        <ExternalLink href={ locale === 'en' ? resumePdfFile : resumePdfFileBR } target="_blank"> 
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