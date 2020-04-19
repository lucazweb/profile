import React, { useContext } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { H1, Menu } from '..';
import { StyledH1 } from './header.styled';
import { LocaleContext } from  '../../Locale.context';

export const Header = props => {
    const [locale, setLocale] = useContext(LocaleContext);
    const nextLocale = locale === "en" ? "pt" : "en";

    return (
        <Row end="md">
            <Col xs={12} md={12}>
                <button onClick={() => setLocale(nextLocale)}> 
                    { 
                        nextLocale === 'pt' 
                        ? 'Ler em Português' 
                        : 'Read in English' 
                    } 
                </button>
            </Col>
        </Row>
    )
}

export const SecondaryHeader = () => (
  <Row style={{marginBottom: 16, borderBottom: '1px solid #333'}} start="md">
    <Col md={12}>
      <StyledH1>Lucas Santos . Front-End Engineer</StyledH1>
    </Col>
    <Col md={12}>
      <Menu />
    </Col>
  </Row>  
);