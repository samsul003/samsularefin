import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

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
    var that = this;
    this.itemsToReveal.each(function() {
      // points to itemsToReveal object
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
