/**
 * @fileoverview This file represents all the discounted items for a
 *     particular category.
 */
goog.provide('asales.Carousel');

goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.events');
goog.require('goog.soy');


/**
 * Render auto and mouse responsive carousel and handle all the events related to it.
 * @param {!Object} discountedItems Discounted items object.
 * @param {string} domContainerId Id by which the slider will be rendered.
 * @constructor
 */
asales.Carousel = function(discountedItems, domContainerId) {
  this.discountedItems = discountedItems;
  this.selectedIndex = -1;
  this.currentElMouseOver = null;
  this.previousTile = null;
  this.timeout = null;
  this.renderCarousel(domContainerId);
  this.itemEls = goog.dom.getElementsByClass('carousel-tile');

  goog.events.listen(window, goog.events.EventType.MOUSEMOVE, function(e) {
    this.currentElMouseOver = e.target;
  });

  window.setInterval(syncFocus, 6000);
  
  goog.array.forEach(this.itemEls, function(item){
    goog.events.listen(item, goog.events.EventType.MOUSEOVER, handleHoverOnTile);
  });
}


/**
 * Renders the carousel using soy.
 * @param {!string} domId Dom element id.
 * @private
 */
asales.Carousel.prototype.renderCarousel = function(domId) {
    var soyObj = new goog.soy.Renderer();
    var carouselDom = soyObj.renderAsElement(asales.templates.renderCarousel,this.discountedItems);
    goog.dom.getElement(domId).appendChild(carouselDom);
};

/**
 * Handel ocus event on a tile trigrt thorugh mouse or sync.
 * @param {!Dom} targetTile Dom object contain Target tile.
 */
asales.Carousel.prototype.onFocus = function(targetTile) {
    var changedWidth = 100;
    if (this.previousTile == null) {
      this.previousTile = targetTile;
    }
    if (targetTile != this.previousTile) {
      goog.array.forEach(goog.dom.getElementsByClass('item-info'), function(item) {
        item.style.display = 'none';
      })
    }
    selectedIndex = goog.array.indexOf(this.itemEls, targetTile);
    goog.array.forEach(this.itemEls, function(item) {
      var currentIndex = goog.array.indexOf(this.itemEls, item);
      var diff = Math.abs(selectedIndex - currentIndex);
      var computedWidth = changedWidth - (changedWidth * diff * 10)/100;
      item.style.width = computedWidth > 0 ? computedWidth.toString() + '%' : '10%';
    });

    targetTile.style.width = '500%';
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    //console.log(targetTile.children[1]);
    this.timeout = setTimeout( function() 
      {
        targetTile.children[1].style.width = goog.style.getSize(targetTile)['width'].toString() + 'px';
        targetTile.children[1].style.display = 'block';
      }, 3500);
      this.previousTile = targetTile;
    /*targetTile.children[1].style.width = goog.style.getSize(targetTile)['width'].toString() + 'px';*/
  };


/**
 * Automate the transition slider on the home page.
 * @private
 */
asales.Carousel.prototype.syncFocus = function() {
  if(this.selectedIndex >= this.itemEls.length || this.selectedIndex == -1) {
    this.selectedIndex = 0;
  }
  if(goog.dom.contains(this.itemEls[this.selectedIndex], currentElMouseOver)) {
    return;
  }

  onFocus(this.itemEls[this.selectedIndex]);
  this.selectedIndex = this.selectedIndex + 1;
};

