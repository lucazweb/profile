import React, { useContext } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { LocaleContext } from  '../../Locale.context';

export const Header = props => {
    const [locale, setLocale] = useContext(LocaleContext);
    const nextLocale = locale === "en" ? "pt" : "en";

    return (
        <Row>
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