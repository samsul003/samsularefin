import  $ from  'jquery' ;

class PageLoader {
  constructor() {
    this.loader = $(".loader");
    this.siteContent = $(".site-content");
    this.navLoader= $("#nav-loader");
    this.events();
  }

  events() {
    // page loader animation
    $(document).ready(this.loadAnimation.bind(this));
  }

  loadAnimation() {
    this.loader.delay(300).fadeOut("slow");
    this.siteContent.delay(500).fadeIn("slow");
  }
}

export default PageLoader;
