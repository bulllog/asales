goog.provide('asales.base');

goog.require('goog.dom');
goog.require('goog.DiscountedItems');
goog.require('goog.Items');
goog.require('goog.object');


/**
 * Map of categories and their respective subcategories.
 * @type {Object.<string, Object.<string>>}
 */
asales.base.categoriesMap = null;



/**
 * Initializes all the objects.
 * @constructor
 * @export
 */
asales.base = function(categoriesMap) {
 asales.base.categoriesMap = categoriesMap;
 var discountedItemsEl = goog.dom.getElement('asales-discounted-items');
 if (discountedItemsEl) {
   goog.object.forEach(categoriesMap, function(category, subcategories) {
     var discountedItemsObj = new DiscountedItems(category);
   });
 }

 var itemsEl = goog.dom.getElement('asales-items');
 if (itemsEl) {
   var itemsObj = new Items();
 }
};

