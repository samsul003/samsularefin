import  $ from  'jquery' ;

class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuButton = $(".site-header__menu-button");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuButton.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuButton.toggleClass("site-header__menu-button--animate");
    this.menuButton.toggleClass("site-header__menu-button--close-x");
  }
}

export default MobileMenu;
