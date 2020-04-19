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
    <span> {props.text} </span>
  </React.Fragment>
);

export const Header = (props) => {
  const [locale, setLocale] = useContext(LocaleContext);
  const nextLocale = locale === "en" ? "pt" : "en";

  return (
    <Row end="sm">
      <Col xs={3}>
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
    </Row>
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
      <ColPositionRelative md={12}>
        <StyledH1>
          <FormattedMessage {...messages.roleTitle} />
        </StyledH1>
        <FloatingTranslateButton onClick={() => setLocale(nextLocale)}>
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
