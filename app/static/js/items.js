/**
 *
 * @fileoverview This file represents all the items for the given
 * request(discounted items from a specific category  or sub category
 * from a specific category).
 */


goog.provide('asales.Items');

goog.require('asales.api');
goog.require('asales.templates');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.fx.Dragger');
goog.require('goog.soy.Renderer');
goog.require('goog.style');


/**
 * @param {string} category The category whose discounted items are required.
 * @constructor
 */
asales.Items = function() {
  this.category_ = goog.dom.getElement('selected_category').innerHTML;
  this.isDiscounted_ = !!goog.dom.getElement('discounted');
  this.subcategory_ = goog.dom.getElement('selected_subcategory') ? goog.dom.getElement('selected_subcategory').innerHTML : null;
  this.selectedRowIndex = -1;
  this.items = null;
  this.currentMinSlider = 0;
  this.currentMaxSlider = 180.5;
  this.getItems_();
  goog.array.forEach(goog.dom.getElementsByClass('toggle-button'), function(itemEl) {
    goog.events.listen(itemEl, goog.events.EventType.CLICK, asales.Items.handleToggleView);
  });
  goog.events.listen(goog.dom.getDocument(), goog.events.EventType.MOUSEOVER, goog.bind(this.hidePopup, this));
};


/**
 * Gets the intersaction of the two given list.
 * @param {object} listA First list.
 * @param {object} listB Second list.
 *
 * @return {object} list intersaction of the two list.
 */
asales.Items.intersact = function(listA, listB) {
  var result = listA.filter(function(i) {
    return listB.indexOf(i) > -1;
  });
  return result;
};


/**
 * Filters the result items on the basis of the given parameter.
 * @param {object} filterParam Parameter name for which filtring will be done.
 */
asales.Items.prototype.filterItems = function(filterParam) {
  var filteredItemsBrand = [];
  var filteredItemsDiscount = [];
  var filteredItemsPrice = [];
  var origionalItems = goog.array.clone(this.items);
  goog.array.forEach(filterParam['brands'], function(brand) {
    goog.array.forEach(origionalItems, function(item) {
      if(item.brand_name.trim() == brand) {
	goog.array.extend(filteredItemsBrand, item);
      }
    });
  });
  goog.array.forEach(filterParam['discount'], function(discount) {
    goog.array.forEach(origionalItems, function(item) {
      if(discount == 'Non Discounted' && !item.is_discounted) {
	goog.array.extend(filteredItemsDiscount, item);
      }
      else if(discount == 'Discounted' && item.is_discounted){
	goog.array.extend(filteredItemsDiscount, item);
      }
    });
  });

  var filteredItems = !!filteredItemsBrand.length ? (!!filteredItemsDiscount.length ? asales.Items.intersact(filteredItemsBrand, filteredItemsDiscount) : filteredItemsBrand) : filteredItemsDiscount;
  goog.array.forEach(origionalItems, function(item) {
    if(item.discounted_price >= filterParam['min_value'] && item.discounted_price <= filterParam['max_value']) {
      goog.array.extend(filteredItemsPrice, item);
    }
  });
  filteredItemsPrice = filteredItemsPrice.length == origionalItems.length ? [] : filteredItemsPrice;
  filteredItems = !!filteredItems.length ? (!!filteredItemsPrice.length ? asales.Items.intersact(filteredItems, filteredItemsPrice) : filteredItems) : filteredItemsPrice;
  return filteredItems;
};


/**
 * Handles the filter result on the Domi on the basis of brand name.
 * @param {goog.events} event Event object.
 */
asales.Items.prototype.handleFilterItems_ = function(event) {
  var selectedParametrs = {};
  var selectedBrands = [];
  var selectedDiscount = [];
  var brandOptions = goog.dom.getElementsByClass('brand-option');
  var discountOptions = goog.dom.getElementsByClass('discount-option');
  var isBrandFilter = goog.array.some(brandOptions, function(itemEl) {
    if (itemEl.checked == true) {
      return true;
    }
  });
  var isDiscountFilter = goog.array.some(discountOptions, function(itemEl) {
    if (itemEl.checked == true) {
      return true;
    }
  });
  var isPriceFilter = goog.dom.getElement('slider_min').offsetLeft != 0 || goog.dom.getElement('slider_max').offsetLeft != 199;
  if(!isBrandFilter && !isDiscountFilter && !isPriceFilter) {
    this.renderItems(this.items);
  }
  else {
    goog.array.forEach(brandOptions, function(itemEl) {
      if(itemEl.checked == true) {
	goog.array.extend(selectedBrands, goog.dom.getNextNode(itemEl).innerHTML);
      }
    });
    selectedParametrs['brands'] = selectedBrands;

    goog.array.forEach(discountOptions, function(itemEl) {
      if(itemEl.checked == true) {
	goog.array.extend(selectedDiscount, goog.dom.getNextNode(itemEl).innerHTML);
      }
    });
    selectedParametrs['discount'] = selectedDiscount;

    selectedParametrs['min_value'] = goog.dom.getElementByClass('min_value').value;
    selectedParametrs['max_value'] = goog.dom.getElementByClass('max_value').value;
    this.renderItems(this.filterItems(selectedParametrs)); 
  }
};


/**
 * Handles the toggle between grid view and table view.
 * @param {goog.events} e Event object
 *
 */
asales.Items.handleToggleView = function (e) {
  var targetButton = e.target.id == 'toggle-button-icon' ? e.target.parentElement : e.target;
  var selectedView = targetButton.id.replace('-button', '');
  goog.array.forEach(goog.dom.getElementsByClass('toggle-button'), function(itemEl) {
    itemEl.className = itemEl.className.replace('button-active', '');
  })
  goog.array.forEach(goog.dom.getElementsByClass('items-info-container'), function(itemEl) {
    itemEl.style.display = 'none';
  });
  targetButton.className = targetButton.className + ' button-active';
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
    this.items = resultItems.items;
    this.renderItems(this.items);
    this.renderFilterOptions();

    goog.array.forEach(goog.array.concat(goog.dom.getElementsByClass('brand-option'), goog.dom.getElementsByClass('discount-option')), goog.bind(function(itemList) {
      goog.array.forEach(itemList, goog.bind(function(itemEl) {
	goog.events.listen(itemEl, goog.events.EventType.CLICK, goog.bind(this.handleFilterItems_, this));
      },this));
    }, this));
    goog.array.forEach([this.sliderMax, this.sliderMin], goog.bind(function(itemEl) {
      goog.events.listen(itemEl, goog.events.EventType.DRAG, goog.bind(this.handleFilterItems_, this));
    }, this));
  };

  asales.api.getItems(this.category_, this.subcategory_, this.isDiscounted_, goog.bind(successCallback, this));
};


/**
 * Renders the result on the dom.
 * @param {object} selectedItems Items to be rendered.
 */
asales.Items.prototype.renderItems = function(selectedItems){
  var resultItems = {};
  resultItems['items'] = selectedItems;
  resultItems.category = this.category_;
  resultItems.subcategory = this.subcategory_;
  resultItems.properties = asales.Items.PROPERTIES;
  resultItems.columns = asales.Items.COLUMN_MAP;
  var soyObj = new goog.soy.Renderer();
  var itemsTableDom = soyObj.renderAsElement(asales.templates.renderTableItems, resultItems);
  goog.dom.removeChildren(goog.dom.getElementByClass('asales-table'));
  goog.dom.getElementByClass('asales-table').appendChild(itemsTableDom);
  var itemsGridDom = soyObj.renderAsElement(asales.templates.renderGridItems, resultItems);
  goog.dom.removeChildren(goog.dom.getElementByClass('tile-container'));
  goog.dom.getElementByClass('tile-container').appendChild(itemsGridDom);
  
  goog.array.forEach(goog.dom.getElementsByClass('data-table-tr'), goog.bind(function(itemEl) {
    goog.events.listen(itemEl, goog.events.EventType.MOUSEOVER, goog.bind(this.showPopup, this));
  }, this));
  goog.array.forEach(goog.dom.getElementsByClass('asales-detail-popup'), goog.bind(function(itemEl) {
    goog.events.listen(itemEl, goog.events.EventType.MOUSEOVER, goog.bind(this.handleMouseOverOnPopup, this));
  }, this));
};



/**
 * Renders the filter options for the items.
 */
asales.Items.prototype.renderFilterOptions = function () {
  var uniqueBrands = asales.Items.getUniqueBrands(this.items);
  var prices = asales.Items.getMinMaxPrices(this.items);
  var soyObj = new goog.soy.Renderer();
  var filterOptionDom = soyObj.renderAsElement(asales.templates.renderFilterOptions, {'uniqueBrands': uniqueBrands, 'minPrice': prices['min'], 'maxPrice': prices['max']});
  goog.dom.getElementByClass('filter-options').appendChild(filterOptionDom);

  var maxWidthSlider = 180.5;
  var incrementFactor = (prices['max'] - prices['min'])/maxWidthSlider;
  this.sliderMin = new goog.fx.Dragger(goog.dom.getElement('slider_min'), null, new goog.math.Rect(0, 0, maxWidthSlider, 0));
  this.sliderMax = new goog.fx.Dragger(goog.dom.getElement('slider_max'), null, new goog.math.Rect(0, 0, maxWidthSlider, 0));
  goog.array.forEach([this.sliderMin, this.sliderMax], goog.bind(function(slider) {
    goog.events.listen(slider, 'drag', goog.bind(function(e) {
      var unselectedSlider = e.target == this.sliderMin ? this.sliderMax : this.sliderMin;
      var newDimension = e.target == this.sliderMin ? new goog.math.Rect(e.left, 0, maxWidthSlider-e.left, 0) : new goog.math.Rect(0, 0, e.left, 0);
      unselectedSlider.setLimits(newDimension);
      var incrementFactor = (prices['max'] - prices['min'])/maxWidthSlider;
      goog.dom.getElement(e.target.target.id + '_value').value = goog.math.safeCeil(prices['min'] + e.left * incrementFactor);
    }, this));
  }, this));
}


/**
 * Returns the unique brand names from the items.
 * @param {!Object} items Items
 */
asales.Items.getUniqueBrands = function (items) {
  var brands = [];
  goog.array.forEach(items, function(item) {
    goog.array.extend(brands, item.brand_name);
  });
  
  goog.array.forEach(brands, function(brand, i) {
    brands[i] = brand.trim();
  });
  goog.array.removeDuplicates(brands);
  return brands;
}


/**
 * Returns the minimum and maxmum value of the prices from the items.
 * @param {!Object} items Items
 */
asales.Items.getMinMaxPrices = function (items) {
  var prices = [];
  var price = {};
  goog.array.forEach(items, function(item) {
    goog.array.extend(prices, item.discounted_price);
  });

  goog.array.sort(prices);
  price['min'] = prices[0];
  price['max'] = goog.array.peek(prices);
  return price;
}


/**
 * Shows the item information tool tip on hover of the table row.
 * @param {goog.events.event} e Event object
 */

asales.Items.prototype.showPopup = function (e) {
  var rowEls = goog.dom.getElementsByClass('data-table-tr');
  var currentRowIndex = goog.array.indexOf(rowEls, e.target) <= -1 ? goog.array.indexOf(rowEls, e.target.parentElement) : goog.array.indexOf(rowEls, e.target);

  if(this.selectedRowIndex == currentRowIndex) {
    return;
  } 
    
  var popupEls = goog.dom.getElementsByClass('asales-detail-popup');
  
  if (this.selectedRowIndex != -1) {
    popupEls[this.selectedRowIndex].style.display = 'none';
    rowEls[this.selectedRowIndex].style.background = 'white';
  }
  this.selectedRowIndex = currentRowIndex;
  var selectedPopup = popupEls[this.selectedRowIndex];
  goog.style.setStyle(selectedPopup.children[0], 'margin-top', (rowEls[this.selectedRowIndex].offsetTop-70).toString() + 'px');
  rowEls[this.selectedRowIndex].style.background = 'rgba(228, 154, 55, 0.5)';
  popupEls[this.selectedRowIndex].style.display = 'block';
};


/**
 * Hides the item information tool tip on mouseout of the table row.
 * @param {goog.events.event} e Event object
 */

asales.Items.prototype.hidePopup = function (e) {
  if (!goog.dom.contains(goog.dom.getElementByClass('asales-table'), e.target) && this.selectedRowIndex > -1) {
    var rowEls = goog.dom.getElementsByClass('data-table-tr');
    var popupEls = goog.dom.getElementsByClass('asales-detail-popup');
    rowEls[this.selectedRowIndex].style.background = 'white';
    popupEls[this.selectedRowIndex].style.display = 'none';
    this.selectedRowIndex = -1;
  }
};

/**
 * Handles mouse over on popup.
 * @param {goog.events} e Event object.
 *
 */
asales.Items.prototype.handleMouseOverOnPopup = function(e) {
  var rowEls = goog.dom.getElementsByClass('data-table-tr');
  rowEls[this.selectedRowIndex].style.background = 'rgba(228, 154, 55, 0.5)';
};
