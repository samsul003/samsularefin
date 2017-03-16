import  $ from  'jquery' ;

class MobileMenu {
  constructor() {
    this.menuButton = $(".site-header__menu-button");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuButton.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
  }
}

export default MobileMenu;
