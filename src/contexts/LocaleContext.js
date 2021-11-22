// libs
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
// hooks
import { useLocalStorage } from '../hooks/useLocalStorage';
// locales
import locales from '../locales';

export const LocaleContext = createContext();

export const ProviderLocale = ({ children }) => {
  const [locale, setLocale] = useLocalStorage('locale', 'vi');

  const provider = {
    locale,
    setLocale,
    localeDataSource: locales[locale],
  };
  console.log(provider);
  return (
    <LocaleContext.Provider value={provider}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

ProviderLocale.propTypes = {
  children: PropTypes.node,
};

ProviderLocale.defaultProps = {
  children: null,
};
