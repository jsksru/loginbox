import * as light from './light';
import * as dark from './dark';

export const themes = [
  {
    id: 0,
    name: 'Светлая',
    theme: light
  },
  {
    id: 1,
    name: 'Темная',
    theme: dark
  },
];

export const getThemeById = (id: number): any => {
  const result = themes.find(i => i.id === id);
  if (result) {
    return result;
  }
  return themes[0];
};