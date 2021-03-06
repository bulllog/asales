/**
 * @fileoverview This file represents all the discounted items for a
 *     particular category.
 */


goog.provide('asales.DiscountedItems');

goog.require('asales.api');
goog.require('asales.templates');
goog.require('goog.dom');
goog.require('goog.soy');



/**
 * @param {string} category The category whose discounted items are required.
 * @constructor
 */
asales.DsicountedItems = function(category) {
  this.category_ = category;
  this.getDiscountedItems_();
};


/**
 * Gets the discounted items for the category.
 * @private
 */
asales.getDiscountedItems_ = function() {
  var successCallback = function(discountedItems) {
    discountedItems.category = this.category_;
    var soyObj = goog.soy.Renderer();
    soyObj.renderAsElement('asales.templates.CategoryDiscountedItems', discountedItems);
  };
  goog.bind(successCallback, this, discountedItems);
 
  asales.api.getItems(this.category_, '', true, successCallback);
};

