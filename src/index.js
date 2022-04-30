const timer = require('./modules/timer');//one
//const menu = require('./modules/menu');
//const modal = require('./modules/modal');
//const validate = require('./modules/validate');
import validate from './modules/validate';
import tabs from './modules/tabs';
import menu from './modules/menu';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';

timer('23 april 2022');//one
menu();
modal();
validate();
tabs();
slider();
calc(100);