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
  return '<li class=\'asales-discounted-item carousel-tile\'><a href=\'/item\' class=\'asales-discounted-image\'><img src=\'/images/' + soy.$$escapeHtml(opt_data.category) + '/' + soy.$$escapeHtml(opt_data.item.name) + '.jpg\' alt=\'Item\'></a></li>';
};
