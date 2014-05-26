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
  var output = '<table class=\'data-table\'><thead class=\'data-table-head\'><tr class=\'data-table-header\'>';
  var propertyList28 = opt_data.properties;
  var propertyListLen28 = propertyList28.length;
  for (var propertyIndex28 = 0; propertyIndex28 < propertyListLen28; propertyIndex28++) {
    var propertyData28 = propertyList28[propertyIndex28];
    output += '<th>' + soy.$$escapeHtml(opt_data.columns[propertyData28]) + '</th>';
  }
  output += '</tr></thead><tbody>';
  var itemList34 = opt_data.items;
  var itemListLen34 = itemList34.length;
  for (var itemIndex34 = 0; itemIndex34 < itemListLen34; itemIndex34++) {
    var itemData34 = itemList34[itemIndex34];
    output += '<tr class=\'data-table-tr\'>';
    var propertyList36 = opt_data.properties;
    var propertyListLen36 = propertyList36.length;
    for (var propertyIndex36 = 0; propertyIndex36 < propertyListLen36; propertyIndex36++) {
      var propertyData36 = propertyList36[propertyIndex36];
      output += '<td>' + ((propertyData36 == 'icon') ? '<img src=\'images/' + soy.$$escapeHtml(opt_data.category) + '/' + soy.$$escapeHtml(opt_data.subcategory) + '/' + soy.$$escapeHtml(itemData34.name) + '\' alt=' + soy.$$escapeHtml(itemData34.name) + '></img>' : soy.$$escapeHtml(itemData34[propertyData36])) + '</td>';
    }
    output += asales.templates.renderPopup({item: itemData34}) + '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


asales.templates.renderPopup = function(opt_data, opt_ignored) {
  return '<div class=\'asales-detail-popup\' id=\'pop-up-' + soy.$$escapeHtml(opt_data.item['name']) + '\'><div class=\'popup-tool-tip\'><div class=\'popup-info\'><div class=\'title product-info\'>' + soy.$$escapeHtml(opt_data.item['name']) + '</div><div class=\'brand-name product-info\'>Brand : ' + soy.$$escapeHtml(opt_data.item['brand_name']) + '</div><div class=\'product-info\'>Price : ' + soy.$$escapeHtml(opt_data.item['price']) + '</div></div><div class=\'item-icon\'><img src=\'/images/' + soy.$$escapeHtml(opt_data.item['icon']) + '.jpg\'></img></div></div></div>';
};


asales.templates.renderGridItems = function(opt_data, opt_ignored) {
  var output = '<div>';
  var itemList72 = opt_data.items;
  var itemListLen72 = itemList72.length;
  for (var itemIndex72 = 0; itemIndex72 < itemListLen72; itemIndex72++) {
    var itemData72 = itemList72[itemIndex72];
    output += '<div class=\'tile\'><div class=\'tile-header\'><div class=\'tile-title\'><span> Product Name : </span>' + soy.$$escapeHtml(itemData72['name']) + '</div><div class=\'tile-price\'><span>Price : </span>' + soy.$$escapeHtml(itemData72['price']) + '</div></div><div class=\'tile-icon\'><img src=\'/images/' + soy.$$escapeHtml(itemData72['icon']) + '.jpg\'></img></div><div class=\'tile-slider\'><div class=\'tile-slider-info\'></div></div></div>';
  }
  output += '</div>';
  return output;
};
