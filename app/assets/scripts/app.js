import PageLoader from './modules/PageLoader';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import $ from 'jquery';

let mobileMenu = new MobileMenu();
let pageLoader = new PageLoader();
new RevealOnScroll($(".card"), "-2%");
let modal = new Modal();
