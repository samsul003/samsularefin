import PageLoader from './modules/PageLoader';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var pageLoader = new PageLoader();
new RevealOnScroll($(".card"), "-12%");
var modal = new Modal();
