/**
 * @fileoverview This file represents all the items for the given
 * request(discounted items from a specific category  or sub category
 * from a specific category).
 */


goog.provide('asales.items');

goog.require('asales.api');

goog.require('asales.templates');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.soy.Renderer');
goog.require('goog.style');


/**
 * @param {string} category The category whose discounted items are required.
 * @constructor
 */
asales.Items = function() {
  this.category_ = goog.dom.getElement('selected_category').innerHTML;
  this.isDiscounted_ = !!goog.dom.getElement('discounted');
  this.subcategory_ = goog.dom.getElementsByClass('selected_subcategory')[0] ? goog.dom.getElement('selected_subcategory').innerHTML : null;
  this.selectedRowIndex = -1;
  this.getItems_();
  goog.array.forEach(goog.dom.getElementsByClass('toggle-button'), function(itemEl) {
    goog.events.listen(itemEl, goog.events.EventType.CLICK, asales.Items.handleToggleView);
  });
};


/**
 * Handles the toggle between grid view and table view.
 * @param {goog.events} e Event object
 *
 */
asales.Items.handleToggleView = function (e) {
  var selectedView = e.target.id.replace('-button', '');
  goog.array.forEach(goog.dom.getElementsByClass('toggle-button'), function(itemEl) {
    itemEl.className = itemEl.className.replace('button-active', '');
  })
  goog.array.forEach(goog.dom.getElementsByClass('items-info-container'), function(itemEl) {
    itemEl.style.display = 'none';
  });
  e.target.className = e.target.className + ' button-active';
  goog.dom.getElement(selectedView).style.display = 'block';
};


/**
 * Array contain all the column ids.
 * {Array}
 */
 asales.Items.PROPERTIES =  ['name', 'brand_name', 'price', 'discount', 'discounted_price', 'icon'];


/**
 * Map for column id and name.
 * {Object}
 */
  asales.Items.COLUMN_MAP = 
  {
    'name': 'Product Name',
    'brand_name': 'Brand',
    'price': 'Price',
    'discount': 'Discount',
    'icon': 'Product Picture',
    'discounted_price': 'Price After Discount',
    'desc': 'About Product'
  };


/**
 * Gets the items for the corespoding request..
 * @private
 */
asales.Items.prototype.getItems_ = function() {
  var successCallback = function(resultItems) {
    resultItems.category = this.category_;
    resultItems.subcategory = this.subcategory_;
    resultItems.properties = asales.Items.PROPERTIES;
    resultItems.columns = asales.Items.COLUMN_MAP;
    var soyObj = new goog.soy.Renderer();
    var itemsTableDom = soyObj.renderAsElement(asales.templates.renderTableItems, resultItems);
    goog.dom.getElementByClass('asales-table').appendChild(itemsTableDom);

    goog.array.forEach(goog.dom.getElementsByClass('data-table-tr'), goog.bind(function(itemEl) {
      goog.events.listen(itemEl, goog.events.EventType.MOUSEOVER, this.showPopup);
    }, this));
    goog.array.forEach(goog.dom.getElementsByClass('data-table-tr'), goog.bind(function(itemEl) {
      goog.events.listen(itemEl, goog.events.EventType.MOUSEOUT, this.hidePopup);
    }, this));

    var itemsGridDom = soyObj.renderAsElement(asales.templates.renderGridItems, resultItems);
    goog.dom.getElementByClass('tile-container').appendChild(itemsGridDom);
  };

  asales.api.getItems(this.category_, this.subcategory_, this.isDiscounted_, goog.bind(successCallback, this));
};


/**
 * Shows the item information tool tip on hover of the table row.
 * @param {goog.events.event} e Event object
 */

asales.Items.prototype.showPopup = function (e) {
  var rowEls = goog.dom.getElementsByClass('data-table-tr');
  this.selectedRowIndex = goog.array.indexOf(rowEls, e.target) <= -1 ? goog.array.indexOf(rowEls, e.target.parentElement) : goog.array.indexOf(rowEls, e.target);

  var popupEls = goog.dom.getElementsByClass('asales-detail-popup');
  goog.array.forEach(popupEls, function(popup){
    popup.style.display = 'none';
  });
  var selectedPopup = popupEls[this.selectedRowIndex];
  goog.style.setStyle(selectedPopup.children[0], 'margin-top', (rowEls[this.selectedRowIndex].offsetTop-70).toString() + 'px');
  popupEls[this.selectedRowIndex].style.display = 'block';
};


/**
 * Hides the item information tool tip on mouseout of the table row.
 * @param {goog.events.event} e Event object
 */

asales.Items.prototype.hidePopup = function (e) {
  var popupEls = goog.dom.getElementsByClass('asales-detail-popup');
  if (goog.array.indexOf(popupEls, e.target) < 0) {
    goog.array.forEach(popupEls, function(popup){
      popup.style.display = 'none';
    });
  }
};
