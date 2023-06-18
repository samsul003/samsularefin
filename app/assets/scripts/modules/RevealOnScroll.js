import $ from 'jquery';
import Waypoint from 'waypoints/lib/noframework.waypoints'

class RevealOnScroll {
  constructor(elm, offset) {
    this.itemsToReveal = elm;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }
// hide the items initially
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
// using waypoint to reveal each item
  createWaypoints() {
    // points to offsetPercentage object
    let context = this;
    this.itemsToReveal.each((item) => {
      // points to itemsToReveal object
      //let currentItem = this;
      let currentItem = this.item;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: context.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
