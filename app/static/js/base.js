goog.provide('asales.base');

goog.require('goog.dom');
goog.require('asales.DiscountedItems');
//goog.require('asales.Items');
goog.require('goog.object');



/**
 * Initializes all the objects.
 * @constructor
 * @export
 */
asales.base = function(categories) {
 asales.base.categories = categories;
 var discountedItemsEl = goog.dom.getElement('asales-discounted-items');
 if (discountedItemsEl) {
   goog.object.forEach(categories, function(category) {
     var discountedItemsObj = new asales.DiscountedItems(category);
   });
 }

 var itemsEl = goog.dom.getElement('asales-items');
 if (itemsEl) {
   var itemsObj = new Items();
 }
};


// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('asales.base', asales.base);
