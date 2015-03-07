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
  console.log('selected category ' + discountedItems.category);
  this.discountedItems = discountedItems;
  this.selectedIndex = -1;
  this.currentElMouseOver = null;
  this.previousTile = null;
  this.timeout = null;
  this.category = discountedItems.category;
  this.renderCarousel(domContainerId);
  this.itemEls = goog.dom.getElementsByClass(this.category + '-carousel-tile');

  goog.events.listen(window, goog.events.EventType.MOUSEMOVE, goog.bind(function(e) {
    this.currentElMouseOver = e.target;
  }, this));

  window.setInterval(goog.bind(this.syncFocus, this), 6000);
  
  goog.array.forEach(this.itemEls, goog.bind(function(item){
    goog.events.listen(item, goog.events.EventType.MOUSEOVER, goog.bind(this.handleHoverOnTile, this));
  }, this));

  goog.array.forEach(this.itemEls, goog.bind(function(item){
    goog.events.listen(item, goog.events.EventType.CLICK, goog.bind(this.handleClickOnTile, this));
  }, this));
  this.syncFocus();
};


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

    if (this.previousTile == targetTile) {
      return;
    }
    if (this.previousTile == null) {
      this.previousTile = targetTile;
    }
    if (targetTile != this.previousTile) {
      goog.array.forEach(goog.dom.getElementsByClass(this.category + '-item-info'), function(item) {
        item.style.display = 'none';
      })
    }
    this.selectedIndex = goog.array.indexOf(this.itemEls, targetTile);
    goog.array.forEach(this.itemEls, goog.bind(function(item) {
      var currentIndex = goog.array.indexOf(this.itemEls, item);
      var diff = Math.abs(this.selectedIndex - currentIndex);
      var computedWidth = changedWidth - (changedWidth * diff * 10)/100;
      item.style.width = computedWidth > 0 ? computedWidth.toString() + '%' : '10%';
    }, this));

    targetTile.style.width = '350%';
    if (this.timeout) {
      clearTimeout(this.timeout);
      clearTimeout(this.timeoutTileHover);
    }
    this.timeout = setTimeout( function() {
        targetTile.children[1].style.width = goog.style.getSize(targetTile)['width'].toString() + 'px';
        targetTile.children[1].style.height = '13%';
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
  if(goog.dom.contains(this.itemEls[this.selectedIndex], this.currentElMouseOver)) {
    return;
  }

  this.onFocus(this.itemEls[this.selectedIndex]);
  this.selectedIndex = this.selectedIndex + 1;
};


/**
 * Handles hover action on tile.
 * @param {goog.events} event Event object.
 *
 */
asales.Carousel.prototype.handleHoverOnTile = function(e) {	
    //var targetTile = (e.target.tagName == 'IMG' || e.target.className == 'item-info') ? e.target.parentElement : e.target;
  var selectedTile = null;
  var tilesDom = goog.dom.getElementsByClass(this.category + '-carousel-tile');
  goog.array.some(tilesDom, function(tile, i) {
    if( goog.dom.contains(tile, e.target) ) {
      selectedTile = i;
      return;
    }
  });
  this.onFocus(tilesDom[selectedTile]);
  
  this.timeoutTileHover = setTimeout( function() {
      tilesDom[selectedTile].children[1].style.height = '30%';
  }, 3510);
};


/**
 * Hnadles click on tile.
 * @param {goog.events} event Event object.
 *
 */
asales.Carousel.prototype.handleClickOnTile = function(event) {
  var item_name = this.discountedItems.items[this.selectedIndex]['icon'];
  var url = '/item_details?item_name=' + item_name;
  window.location = url;
};
