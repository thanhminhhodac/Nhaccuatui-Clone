// libs
import React from 'react';
import { Select } from 'antd';
// context
import { useLocale } from '../../../../../contexts/LocaleContext';

const { Option } = Select;

const LocaleSelector = () => {
  const { locale, setLocale, localeDataSource } = useLocale();
  const { localeOption } = localeDataSource;

  const handleLocaleChange = (value) => {
    setLocale(value);
  };

  return (
    <Select defaultValue={locale} onChange={handleLocaleChange}>
      {localeOption.map((option) => (
        <Option value={option.value} key={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default LocaleSelector;
