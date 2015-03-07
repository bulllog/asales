"""This file contains handler for details of an item."""

import get_items
import pybase


class ItemDetails(pybase.PyBase):

  def get(self):
    categories = self.categories
    subcategories = self.subcategories
    item_name = self.request.get('item_name')
    get_item_obj = get_items.GetItems()
    if item_name:
      item = get_item_obj.getItem(item_name)
    item_temp = {
        'name': 'Dummy Item', 'brand_name': 'Dummy Brand',
        'price': 'Dummy Cost', 'description': 'Dummy Description',
        'icon': 'woodland', 'categories': self.categories,
        'subcategories': self.subcategories
    }

    if item:
      item = item
    else:
      item = item_temp
    template_value = {
        'categories' : categories,
        'subcategories' : subcategories,
        'item' : item
        }
    self.renderTemplate('item.html', template_value)

