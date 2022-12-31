import  $ from  'jquery' ;

class PageLoader {
  constructor() {
    this.loader = $(".loader");
    this.siteContent = $(".site-content");
    this.events();
  }

  events() {
    // page loader animation
    $(document).ready(this.loadAnimation.bind(this));
  }

  loadAnimation() {
    this.loader.delay(100).fadeOut("slow");
    this.siteContent.delay(100).fadeIn("slow");
  }
}

export default PageLoader;
