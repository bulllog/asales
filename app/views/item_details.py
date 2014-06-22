"""This file contains handler for details of an item."""

import pybase


class ItemDetails(pybase.PyBase):

  def get(self):
    item = {
        'name': 'Dummy Item', 'brand_name': 'Dummy Brand',
        'price': 'Dummy Cost', 'description': 'Dummy Description',
        'icon': 'woodland', 'categories': self.categories,
        'subcategories': self.subcategories
    }
    self.renderTemplate('item.html', item)

