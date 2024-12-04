import { useState } from 'react';
import { en } from './en';
import { pt_br } from './pt-br';

export type I18NLanguage = 'en' | 'pt-br';

export const Languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'pt-br',
    name: 'Português',
    flag: '🇧🇷',
  },
];

export const i18nLocales = {
  en,
  'pt-br': pt_br,
};

export const i18n = i18nLocales['en'];
