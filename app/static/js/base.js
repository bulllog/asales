/**
 * @fileoverview This file is the entry point of the application.
 */


goog.provide('asales.base');

goog.require('goog.dom');
goog.require('asales.DiscountedItems');
<<<<<<< HEAD
goog.require('asales.Items');
goog.require('goog.array');


/**
 * An array of categories.
 * @type {Array.<string>}
 */
asales.base.categories = null;


=======
//goog.require('asales.Items');
goog.require('goog.object');


>>>>>>> eb702d4c134cec3a881de18b73fefad3390bb10d

/**
 * Initializes all the objects.
 * @param {Array.<string>} categories An array of categories.
 * @constructor
 * @export
 */
asales.base = function(categories) {
 asales.base.categories = categories;
 var discountedItemsEl = goog.dom.getElement('asales-discounted-items');
 if (discountedItemsEl) {
<<<<<<< HEAD
   goog.array.forEach(categories, function(category) {
=======
   goog.object.forEach(categories, function(category) {
>>>>>>> eb702d4c134cec3a881de18b73fefad3390bb10d
     var discountedItemsObj = new asales.DiscountedItems(category);
   });
 }

 var itemsEl = goog.dom.getElement('asales-items');
 if (itemsEl) {
   var itemsObj = new asales.Items();
 }
};


// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('asales.base', asales.base);
