/**
 * @fileoverview This file represents all the discounted items for a
 *     particular category.
 */


goog.provide('asales.DiscountedItems');

goog.require('asales.api');
goog.require('asales.Carousel');
goog.require('asales.templates');
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
    carouselObj = new asales.Carousel(discountedItems, 'asales-' + this.category_.toLowerCase() + '-discounted-items');
    
  };

  asales.api.getItems(this.category_, '', true, goog.bind(successCallback, this));
};


/**
 * Handle focus on the item from the discounted item list.
 * @param{goog.events.event} e Event object
 */
//asales.DiscountedItems.handleHoverOnTile = function(e) {	
  //var targetTile = e.target.id == 'discounted-item-image' ?
      //e.target.parentElement.parentElement : (e.target.className == 'asales-discounted-image' ?
      //e.target.parentElement : e.target);
  //var itemEls = goog.dom.getElementsByClass('carousel-tile');
  //var changedWidth = 100;
  //var selectedIndex = goog.array.indexOf(itemEls, targetTile);
  //if (selectedIndex == -1) {
    //return;
  //}
  //goog.array.forEach(itemEls, function(item) {
    //var currentIndex = goog.array.indexOf(itemEls, item);
    //var diff = Math.abs(selectedIndex - currentIndex);
    //var computedWidth = changedWidth - (changedWidth * diff * 20)/100;
    //item.style.width = computedWidth > 0 ? computedWidth.toString() + '%' : '20%';
  //});
  //targetTile.style.width = '300%';
  
  //goog.array.forEach(goog.dom.getElementsByClass('discounted-item-info'), function(item) {
    //item.style.display = 'none';
  //})
  //targetTile.childNodes[1].style.display = 'block';
//};
