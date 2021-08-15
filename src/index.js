import './sass/main.scss';
import { menuRef, checkboxRef } from './js/refs';
import { cardMarkup, createCardMarkup } from './js/markup';
import { onChangeTheme } from './js/handlers';
import saveTheme from './js/savetheme';

checkboxRef.addEventListener('change', onChangeTheme);
