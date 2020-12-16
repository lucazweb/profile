import React, { useContext } from "react";
import { Row, Col } from "react-flexbox-grid";
import { Menu } from "..";
import { defineMessage, FormattedMessage } from "react-intl";
import { LocaleContext } from "../../Locale.context";
import Emoji from "a11y-react-emoji";
import {
  StyledH1,
  TranslateButton,
  FloatingTranslateButton,
  ColPositionRelative,
  StyledRow,
  StyledSpan
} from "./header.styled";

const messages = defineMessage({
  roleTitle: {
    id: "RoleTitle",
    defaultMessage: "Lucas Santos . Front-End Engineer",
  },
});

const TranslateButtonContent = (props) => (
  <React.Fragment>
    <Emoji symbol={props.symbol} label={props.label} />
    <StyledSpan> {props.text} </StyledSpan>
  </React.Fragment>
);

export const Header = (props) => {
  const [locale, setLocale] = useContext(LocaleContext);
  const nextLocale = locale === "en" ? "pt" : "en";

  return (
    <StyledRow center="xs" end="md">
      <Col xs={12} md={3}>
        <TranslateButton onClick={() => setLocale(nextLocale)}>
          {nextLocale === "pt" ? (
            <TranslateButtonContent
              symbol="🇧🇷"
              label="Love land Flag"
              text="Versão português"
            />
          ) : (
            <TranslateButtonContent
              symbol="🇺🇸"
              label="USA flag"
              text="English version"
            />
          )}
        </TranslateButton>
      </Col>
    </StyledRow>
  );
};

export const SecondaryHeader = () => {
  const [locale, setLocale] = useContext(LocaleContext);
  const nextLocale = locale === "en" ? "pt" : "en";

  return (
    <Row
      style={{ marginBottom: 16, borderBottom: "1px solid #333" }}
      start="md"
    >
      <ColPositionRelative xs={12} md={12}>
        <StyledH1>
          <FormattedMessage {...messages.roleTitle} />
        </StyledH1>
        <FloatingTranslateButton style={{display: 'none'}} onClick={() => setLocale(nextLocale)}>
          {nextLocale === "pt" ? (
            <TranslateButtonContent
              symbol="🇧🇷"
              label="Love land Flag"
              text="Versão português"
            />
          ) : (
            <TranslateButtonContent
              symbol="🇺🇸"
              label="USA flag"
              text="English version"
            />
          )}
        </FloatingTranslateButton>
      </ColPositionRelative>

      <Col md={12}>
        <Menu />
      </Col>
    </Row>
  );
};
