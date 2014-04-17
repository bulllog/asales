goog.provide('asales.base');

goog.require('goog.dom');
goog.require('goog.DiscountedItems');
goog.require('goog.Items');
goog.require('goog.array');


/**
 * An array of categories.
 * @type {Array.<string>}
 */
asales.base.categories = null;



/**
 * Initializes all the objects.
 * @param {Array.<string>} An array of categories.
 * @constructor
 * @export
 */
asales.base = function(categories) {
 asales.base.categories = categories;
 var discountedItemsEl = goog.dom.getElement('asales-discounted-items');
 if (discountedItemsEl) {
   goog.array.forEach(categories, function(category) {
     var discountedItemsObj = new DiscountedItems(category);
   });
 }

 var itemsEl = goog.dom.getElement('asales-items');
 if (itemsEl) {
   var itemsObj = new Items();
 }
};

