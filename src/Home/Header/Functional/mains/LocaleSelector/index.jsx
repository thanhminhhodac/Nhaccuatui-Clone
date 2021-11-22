// libs
import React from 'react';
// context
import { useLocale } from '../../../../../contexts/LocaleContext';
// styles

const LocaleSelector = () => {
  const { locale, setLocale, localeDataSource } = useLocale();

  const handleLocaleChange = (e) => {
    setLocale(e.target.value);
  };
  const { localeOption } = localeDataSource;

  return (
    <select defaultValue={locale} onChange={handleLocaleChange}>
      {localeOption.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default LocaleSelector;
