''/**
 * @fileoverview This file represents all the discounted items for a
 *     particular category.
 */


goog.provide('asales.DiscountedItems');

goog.require('asales.api');
//goog.require('asales.templates');
//goog.require('goog.dom');
//goog.require('goog.soy');



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
    //var soyObj = goog.soy.Renderer();
    //soyObj.renderAsElement('asales.templates.CategoryDiscountedItems', discountedItems);
  };
  goog.bind(successCallback, this);

  asales.api.getItems(this.category_, '', true, successCallback);
};

