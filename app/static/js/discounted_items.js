/**
 * @fileoverview This file represents all the discounted items for a
 *     particular category.
 */


goog.provide('asales.DiscountedItems');

goog.require('asales.api');
<<<<<<< HEAD
//goog.require('asales.templates');
=======

goog.require('asales.templates');
>>>>>>> eb702d4c134cec3a881de18b73fefad3390bb10d
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.soy.Renderer');
goog.require('goog.style');


/**
 * @param {string} category The category whose discounted items are required.
 * @constructor
 */
asales.DiscountedItems = function(category) {
  this.category_ = category;
  this.getDiscountedItems_();

};


/**
 * Gets the discounted items for the category.
 * @private
 */
asales.DiscountedItems.prototype.getDiscountedItems_ = function() {
  var successCallback = function(discountedItems) {
    console.log(discountedItems);
    discountedItems.category = this.category_;
    var soyObj = new goog.soy.Renderer();
    discountedItemsDom = soyObj.renderAsElement(asales.templates.discountedItems, discountedItems);
    goog.dom.getElement('asales-' + this.category_ + '-discounted-items').appendChild(discountedItemsDom);
    
    var itemEls = goog.dom.getElementsByClass('carousel-tile');
    goog.array.forEach(itemEls, function(item){
	goog.events.listen(item, goog.events.EventType.MOUSEOVER, asales.DiscountedItems.handleHoverOnTile);
    });
  };

  asales.api.getItems(this.category_, '', true, goog.bind(successCallback, this));
};


/**
 * Handle focus on the item from the discounted item list.
 * @param{goog.events.event} e Event object
 */
asales.DiscountedItems.handleHoverOnTile = function(e) {	
  var targetTile = e.target.parentElement.parentElement;
  var itemEls = goog.dom.getElementsByClass('carousel-tile');
  var changedWidth = 100;
  var selectedIndex = goog.array.indexOf(itemEls, targetTile);
  goog.array.forEach(itemEls, function(item) {
    var currentIndex = goog.array.indexOf(itemEls, item);
    var diff = Math.abs(selectedIndex - currentIndex);
    var computedWidth = changedWidth - (changedWidth * diff * 20)/100;
    item.style.width = computedWidth > 0 ? computedWidth.toString() + '%' : '20%';
  });
  targetTile.style.width = '300%';
};
