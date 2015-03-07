// This file was automatically generated from asales.soy.
// Please don't edit this file by hand.

if (typeof asales == 'undefined') { var asales = {}; }
if (typeof asales.templates == 'undefined') { asales.templates = {}; }


asales.templates.renderTableItems = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.items.length == 0) {
    output += '<div class=\'no-result-found\'>No result found.<div>';
  } else {
    output += '<table class=\'data-table\'><thead class=\'data-table-head\'><tr class=\'data-table-header\'>';
    var propertyList8 = opt_data.properties;
    var propertyListLen8 = propertyList8.length;
    for (var propertyIndex8 = 0; propertyIndex8 < propertyListLen8; propertyIndex8++) {
      var propertyData8 = propertyList8[propertyIndex8];
      output += '<th>' + soy.$$escapeHtml(opt_data.columns[propertyData8]) + '</th>';
    }
    output += '</tr></thead><tbody>';
    var itemList14 = opt_data.items;
    var itemListLen14 = itemList14.length;
    for (var itemIndex14 = 0; itemIndex14 < itemListLen14; itemIndex14++) {
      var itemData14 = itemList14[itemIndex14];
      output += '<tr class=\'data-table-tr\'>';
      var propertyList16 = opt_data.properties;
      var propertyListLen16 = propertyList16.length;
      for (var propertyIndex16 = 0; propertyIndex16 < propertyListLen16; propertyIndex16++) {
        var propertyData16 = propertyList16[propertyIndex16];
        output += '<td>' + ((propertyData16 == 'icon') ? '<a href=\'/item_details?item_name=' + soy.$$escapeHtml(itemData14.icon) + '\'><img src=\'images/' + soy.$$escapeHtml(itemData14.category) + '/' + soy.$$escapeHtml(itemData14.subcategory) + '/' + soy.$$escapeHtml(itemData14.icon) + '.jpg\' alt=' + soy.$$escapeHtml(itemData14.name) + '></img></a>' : soy.$$escapeHtml(itemData14[propertyData16])) + '</td>';
      }
      output += asales.templates.renderPopup({item: itemData14}) + '</tr>';
    }
    output += '</tbody></table>';
  }
  return output;
};


asales.templates.renderPopup = function(opt_data, opt_ignored) {
  return '<div class=\'asales-detail-popup\' id=\'pop-up-' + soy.$$escapeHtml(opt_data.item['icon']) + '\'><div class=\'popup-tool-tip\'><div class=\'popup-info\'><div class=\'title product-info\'>' + soy.$$escapeHtml(opt_data.item['name']) + '</div><div class=\'brand-name product-info\'>Brand : ' + soy.$$escapeHtml(opt_data.item['brand_name']) + '</div><div class=\'product-info\'' + ((opt_data.item.discount != 0) ? 'style="text-decoration: line-through;"' : '') + '>Price : Rs. ' + soy.$$escapeHtml(opt_data.item['price']) + '</div>' + ((opt_data.item.is_discounted) ? '<div class=\'product-info\'>Discount : ' + soy.$$escapeHtml(opt_data.item.discount) + '%</div><div class=\'product-info\'>Price After Discount : Rs. ' + soy.$$escapeHtml(opt_data.item.discounted_price) + '</div>' : '') + '</div><div class=\'item-icon\'><a href=\'/item_details?item_name=' + soy.$$escapeHtml(opt_data.item.icon) + '\'><img src=\'/images/' + soy.$$escapeHtml(opt_data.item['category']) + '/' + soy.$$escapeHtml(opt_data.item['subcategory']) + '/' + soy.$$escapeHtml(opt_data.item['icon']) + '.jpg\'></img></a></div></div></div>';
};


asales.templates.renderGridItems = function(opt_data, opt_ignored) {
  var output = '<div>' + ((opt_data.items.length == 0) ? '<div class=\'no-result-found\'>No result found.<div>' : '');
  var itemList75 = opt_data.items;
  var itemListLen75 = itemList75.length;
  for (var itemIndex75 = 0; itemIndex75 < itemListLen75; itemIndex75++) {
    var itemData75 = itemList75[itemIndex75];
    output += '<div class=\'tile\'><div class=\'tile-icon\'><a href=\'/item_details?item_name=' + soy.$$escapeHtml(itemData75.icon) + '\'><img src=\'/images/' + soy.$$escapeHtml(itemData75.category) + '/' + soy.$$escapeHtml(itemData75.subcategory) + '/' + soy.$$escapeHtml(itemData75.icon) + '.jpg\'></img></a></div><div class=\'tile-header\'><div class=\'tile-title\'>' + soy.$$escapeHtml(itemData75['name']) + '</div><div class=\'price-container\'>' + ((itemData75.discount != 0) ? '<div class=\'tile-price\'> ' + soy.$$escapeHtml(itemData75.discount) + '%</div><div class=\'tile-price\'>Rs.' + soy.$$escapeHtml(itemData75.discounted_price) + '</div>' : '') + '<div class=\'tile-price\'' + ((itemData75.discount != 0) ? 'style="text-decoration: line-through;"' : '') + '><span>Rs. </span>' + soy.$$escapeHtml(itemData75['price']) + '</div></div></div></div>';
  }
  output += '</div>';
  return output;
};


asales.templates.renderFilterOptions = function(opt_data, opt_ignored) {
  var output = '<ul><li class=\'brand-filter filter\'><ul class=\'filter-options\'><li class=\'options-title\'>Choose Brand</li>';
  var brandList105 = opt_data.uniqueBrands;
  var brandListLen105 = brandList105.length;
  for (var brandIndex105 = 0; brandIndex105 < brandListLen105; brandIndex105++) {
    var brandData105 = brandList105[brandIndex105];
    output += '<li class=\'option\'><input type=\'checkbox\' class=\'brand-option\'><span>' + soy.$$escapeHtml(brandData105) + '</span></li>';
  }
  output += '</ul></li><li class=\'discounted-filter filter\'><ul class=\'filter-options\'><li class=\'options-title\'>Discount</li><li class=\'option\'><input type=\'checkbox\' class=\'discount-option\'><span>Discounted</span></li><li class=\'option\'><input type=\'checkbox\' class=\'discount-option\'><span>Non Discounted</span></li></ul></li><li class=\'price-filter filter\'><ul class=\'filter-options\' ><li class=\'options-title\'>Price</li><li class=\'option\' id=\'price-filter-tool\'><div id="slider_base"></div><div class=\'price-controller\'><span id="slider_min" class=\'slider\'></span><span id=\'slider_max\' class=\'slider\'></span></div></li><li class=\'filter-price\'><input type=\'textBox\' readonly value = ' + soy.$$escapeHtml(opt_data.minPrice) + ' class=\'min_value\' id=\'slider_min_value\'><input type=\'textBox\' readonly value = ' + soy.$$escapeHtml(opt_data.maxPrice) + ' class=\'max_value\' id=\'slider_max_value\'></li></li></ul>';
  return output;
};


asales.templates.renderCarousel = function(opt_data, opt_ignored) {
  var output = '<div class=\'' + soy.$$escapeHtml(opt_data.category) + '-container\'><ul class=\'carousel-main\'>';
  var itemList119 = opt_data.items;
  var itemListLen119 = itemList119.length;
  for (var itemIndex119 = 0; itemIndex119 < itemListLen119; itemIndex119++) {
    var itemData119 = itemList119[itemIndex119];
    output += '<li class=\'' + soy.$$escapeHtml(opt_data.category) + '-carousel-tile\'><img src=\'/images/' + soy.$$escapeHtml(itemData119.category) + '/' + soy.$$escapeHtml(itemData119.subcategory) + '/' + soy.$$escapeHtml(itemData119.icon) + '.jpg\'></img><div id=\'footer\' class=\'' + soy.$$escapeHtml(opt_data.category) + '-item-info\'><div class=\'carousel-item-name\'>' + soy.$$escapeHtml(itemData119.name) + '</div><div class=\'carousel-item-info-container\'><div class=\'carousel-item-info\'>' + soy.$$escapeHtml(itemData119.brand_name) + '</div><div class=\'carousel-item-info\'>Rs. ' + soy.$$escapeHtml(itemData119.price) + '</div></div><div class=\'carousel-item-info-container\'><div class=\'carousel-item-info\'>' + soy.$$escapeHtml(itemData119.discount) + '%</div><div class=\'carousel-item-info\'>Rs. ' + soy.$$escapeHtml(itemData119.discounted_price) + '</div></div></div></li>';
  }
  output += '</ul>';
  return output;
};
