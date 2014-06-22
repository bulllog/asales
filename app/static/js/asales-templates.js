// This file was automatically generated from asales.soy.
// Please don't edit this file by hand.

if (typeof asales == 'undefined') { var asales = {}; }
if (typeof asales.templates == 'undefined') { asales.templates = {}; }


asales.templates.helloWorld = function(opt_data, opt_ignored) {
  return 'Hello world!';
};


asales.templates.discountedItems = function(opt_data, opt_ignored) {
  var output = '<ul class=\'shub-discounted-items carousel-main\'>';
  var itemList6 = opt_data.items;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += asales.templates.discountedItem({item: itemData6, category: opt_data.category});
  }
  output += '</ul>';
  return output;
};


asales.templates.discountedItem = function(opt_data, opt_ignored) {
  return '<li class=\'asales-discounted-item carousel-tile\'><a href=\'/' + soy.$$escapeHtml(opt_data.item) + '\' class=\'asales-discounted-image\'><img src=\'images/' + soy.$$escapeHtml(opt_data.category) + '/Casmara Mask.jpg\' id=\'discounted-item-image\'></a><div class=\'discounted-item-info\'><div class=\'discounted-item-left-pane\'><div class=\'discounted-item discounted-item-name\'>Product Name : ' + soy.$$escapeHtml(opt_data.item.name) + '</div><div class=\'discounted-item discounted-item-price\'> Price : ' + soy.$$escapeHtml(opt_data.item.price) + ' </div></div><div class=\'discounted-item-right-pane\'><div class=\'discounted-item discounted-item-discount\'> Discount : ' + soy.$$escapeHtml(opt_data.item.discount) + '% </div><div class=\'discounted-item discount-item-discounted-price\'> Discounted Price : ' + soy.$$escapeHtml(opt_data.item.discounted_price) + ' </div></div></div></li>';
};


asales.templates.renderTableItems = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.items.length == 0) {
    output += '<div class=\'no-result-found\'>No result found.<div>';
  } else {
    output += '<table class=\'data-table\'><thead class=\'data-table-head\'><tr class=\'data-table-header\'>';
    var propertyList32 = opt_data.properties;
    var propertyListLen32 = propertyList32.length;
    for (var propertyIndex32 = 0; propertyIndex32 < propertyListLen32; propertyIndex32++) {
      var propertyData32 = propertyList32[propertyIndex32];
      output += '<th>' + soy.$$escapeHtml(opt_data.columns[propertyData32]) + '</th>';
    }
    output += '</tr></thead><tbody>';
    var itemList38 = opt_data.items;
    var itemListLen38 = itemList38.length;
    for (var itemIndex38 = 0; itemIndex38 < itemListLen38; itemIndex38++) {
      var itemData38 = itemList38[itemIndex38];
      output += '<tr class=\'data-table-tr\'>';
      var propertyList40 = opt_data.properties;
      var propertyListLen40 = propertyList40.length;
      for (var propertyIndex40 = 0; propertyIndex40 < propertyListLen40; propertyIndex40++) {
        var propertyData40 = propertyList40[propertyIndex40];
        output += '<td>' + ((propertyData40 == 'icon') ? '<img src=\'images/' + soy.$$escapeHtml(itemData38.category) + '/' + soy.$$escapeHtml(itemData38.subcategory) + '/' + soy.$$escapeHtml(itemData38.name) + '.jpg\' alt=' + soy.$$escapeHtml(itemData38.name) + '></img>' : soy.$$escapeHtml(itemData38[propertyData40])) + '</td>';
      }
      output += asales.templates.renderPopup({item: itemData38}) + '</tr>';
    }
    output += '</tbody></table>';
  }
  return output;
};


asales.templates.renderPopup = function(opt_data, opt_ignored) {
  return '<div class=\'asales-detail-popup\' id=\'pop-up-' + soy.$$escapeHtml(opt_data.item['name']) + '\'><div class=\'popup-tool-tip\'><div class=\'popup-info\'><div class=\'title product-info\'>' + soy.$$escapeHtml(opt_data.item['name']) + '</div><div class=\'brand-name product-info\'>Brand : ' + soy.$$escapeHtml(opt_data.item['brand_name']) + '</div><div class=\'product-info\'' + ((opt_data.item.discount != 0) ? 'style="text-decoration: line-through;"' : '') + '>Price : Rs. ' + soy.$$escapeHtml(opt_data.item['price']) + '</div>' + ((opt_data.item.is_discounted) ? '<div class=\'product-info\'>Discount : ' + soy.$$escapeHtml(opt_data.item.discount) + '%</div><div class=\'product-info\'>Price After Discount : Rs. ' + soy.$$escapeHtml(opt_data.item.discounted_price) + '</div>' : '') + '</div><div class=\'item-icon\'><img src=\'/images/' + soy.$$escapeHtml(opt_data.item['category']) + '/' + soy.$$escapeHtml(opt_data.item['subcategory']) + '/' + soy.$$escapeHtml(opt_data.item['name']) + '.jpg\'></img></div></div></div>';
};


asales.templates.renderGridItems = function(opt_data, opt_ignored) {
  var output = '<div>' + ((opt_data.items.length == 0) ? '<div class=\'no-result-found\'>No result found.<div>' : '');
  var itemList95 = opt_data.items;
  var itemListLen95 = itemList95.length;
  for (var itemIndex95 = 0; itemIndex95 < itemListLen95; itemIndex95++) {
    var itemData95 = itemList95[itemIndex95];
    output += '<div class=\'tile\'><div class=\'tile-icon\'><img src=\'/images/' + soy.$$escapeHtml(itemData95.category) + '/' + soy.$$escapeHtml(itemData95.subcategory) + '/' + soy.$$escapeHtml(itemData95.name) + '.jpg\'></img></div><div class=\'tile-header\'><div class=\'tile-title\'>' + soy.$$escapeHtml(itemData95['name']) + '</div><div class=\'price-container\'>' + ((itemData95.discount != 0) ? '<div class=\'tile-price\'> ' + soy.$$escapeHtml(itemData95.discount) + '%</div><div class=\'tile-price\'>Rs.' + soy.$$escapeHtml(itemData95.discounted_price) + '</div>' : '') + '<div class=\'tile-price\'' + ((itemData95.discount != 0) ? 'style="text-decoration: line-through;"' : '') + '><span>Rs. </span>' + soy.$$escapeHtml(itemData95['price']) + '</div></div></div></div>';
  }
  output += '</div>';
  return output;
};


asales.templates.renderFilterOptions = function(opt_data, opt_ignored) {
  var output = '<ul><li class=\'brand-filter filter\'><ul class=\'filter-options\'><li class=\'options-title\'>Choose Brand</li>';
  var brandList123 = opt_data.uniqueBrands;
  var brandListLen123 = brandList123.length;
  for (var brandIndex123 = 0; brandIndex123 < brandListLen123; brandIndex123++) {
    var brandData123 = brandList123[brandIndex123];
    output += '<li class=\'option\'><input type=\'checkbox\' class=\'brand-option\'><span>' + soy.$$escapeHtml(brandData123) + '</span></li>';
  }
  output += '</ul></li><li class=\'discounted-filter filter\'><ul class=\'filter-options\'><li class=\'options-title\'>Discount</li><li class=\'option\'><input type=\'checkbox\' class=\'discount-option\'><span>Discounted</span></li><li class=\'option\'><input type=\'checkbox\' class=\'discount-option\'><span>Non Discounted</span></li></ul></li><li class=\'price-filter filter\'><ul class=\'filter-options\' ><li class=\'options-title\'>Price</li><li class=\'option\' id=\'price-filter-tool\'><div id="slider_base"></div><div class=\'price-controller\'><span id="slider_min" class=\'slider\'></span><span id=\'slider_max\' class=\'slider\'></span></div></li><li class=\'filter-price\'><input type=\'textBox\' readonly value = ' + soy.$$escapeHtml(opt_data.minPrice) + ' class=\'min_value\' id=\'slider_min_value\'><input type=\'textBox\' readonly value = ' + soy.$$escapeHtml(opt_data.maxPrice) + ' class=\'max_value\' id=\'slider_max_value\'></li></li></ul>';
  return output;
};


asales.templates.renderCarousel = function(opt_data, opt_ignored) {
  var output = '<div class=\'container\'><ul class=\'carousel-main\'>';
  var itemList135 = opt_data.items;
  var itemListLen135 = itemList135.length;
  for (var itemIndex135 = 0; itemIndex135 < itemListLen135; itemIndex135++) {
    var itemData135 = itemList135[itemIndex135];
    output += '<li carousel-tile><img src=\'/images/' + soy.$$escapeHtml(itemData135.category) + '/' + soy.$$escapeHtml(itemData135.subcategory) + '/' + soy.$$escapeHtml(itemData135.name) + '.jpg\'></img><div id=\'footer\' class=\'item-info\'><div> ' + soy.$$escapeHtml(itemData135.name) + ' </div><div class=price-info><div class=\'old-price\'> Rs. ' + soy.$$escapeHtml(itemData135.price) + ' </div><div>' + soy.$$escapeHtml(itemData135.discount) + ' </div><div>' + soy.$$escapeHtml(itemData135.discounted_price) + '</div></div></div></li>';
  }
  output += '</ul>';
  return output;
};
