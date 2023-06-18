import $ from 'jquery';
import PageLoader from './modules/PageLoader';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';

let mobileMenu = new MobileMenu();
let pageLoader = new PageLoader();
let revealOnScroll = new RevealOnScroll($(".card"), "0%");
let modal = new Modal();
