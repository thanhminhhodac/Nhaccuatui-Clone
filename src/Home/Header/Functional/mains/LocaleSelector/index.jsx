// libs
import React from 'react';
// context
import { useLocale } from '../../../../../contexts/LocaleContext';

const LocaleSelector = () => {
  const { locale, setLocale, localeDataSource } = useLocale();
  const { localeOption } = localeDataSource;

  const handleLocaleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <select defaultValue={locale} onChange={handleLocaleChange}>
      {localeOption.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default LocaleSelector;
