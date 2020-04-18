import React, { useContext } from 'react';
import Router from './Router';
import { IntlProvider } from 'react-intl';
import { LocaleContext } from './Locale.context';
import en from './translations/en.json';
import pt from './translations/pt.json';

const App = () => {
  const [locale] = useContext(LocaleContext);
  const messages = {
    en,
    pt
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router />
    </IntlProvider>
  );
};

export default App;