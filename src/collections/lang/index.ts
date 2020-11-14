import russian from './russian';
import english from './english';

export interface Language {
  readonly title: string;
  readonly formTitle: string;
  readonly loginCaption: string;
  readonly passwordCaption: string;
  readonly enterButtonText: string;
  readonly saveMeText: string;
  readonly forgetPasswordText: string;
  readonly switchThemeCaption: string;
  readonly switchLangCaption: string;
}

export const languages = [
  {
    id: 0,
    name: 'Русский',
    lang: <Language>russian
  },
  {
    id: 1,
    name: 'English',
    lang: <Language>english
  }
];

export const getLangById = (id: number) => {
  const result = languages.find(i => i.id === id);
  if (result) {
    return result
  }
  return languages[0];
};