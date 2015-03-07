#API handler for request to get items.

from api import items_api
from api import item_api
import json
import pybase
import re

import logging

class GetItems(pybase.PyBase):
  """Handler to fetch the items on the given request."""
  item_labels_ = [
      'name', 'brand_name', 'price', 'is_discounted', 'discount',
      'discounted_price', 'description', 'category', 'subcategory', 'icon'
  ]

  def get(self):
    """Overrided function of base class to handle get request."""
    selected_items = []
    is_discounted = self.request.get('is_discounted')
    category = self.request.get('category')
    subcategory = self.request.get('subcategory')
    logging.info(category+' '+subcategory)
    items_obj = items_api.ItemsApi()
    items = items_obj.getItems(category, subcategory, is_discounted)
    for item in items:
      selected_items.append(self.formatQueryResult(item))

    response = {
        'items': selected_items,
        'status': 'success'
        }
    self.response.out.write(json.dumps(response))

  def getItem(self, item_name):
    """Get specific item seleceted on the name"""
    seleceted_item = None
    item_obj = item_api.ItemApi()
    
    if item_name:
      seleceted_item = item_obj.getItem(item_name)
    
    if seleceted_item:
      return self.formatQueryResult(seleceted_item[0])
    else :
      return False

  def formatQueryResult(self, item_obj):
    """Formate the query object according to the given label."""
    item = {}
    item[self.item_labels_[0]] = item_obj.name
    item[self.item_labels_[1]] = item_obj.brand_name
    item[self.item_labels_[2]] = item_obj.price
    item[self.item_labels_[3]] = item_obj.has_discount
    item[self.item_labels_[4]] = item_obj.discount
    item[self.item_labels_[5]] = item_obj.discounted_price
    item[self.item_labels_[6]] = item_obj.description
    item[self.item_labels_[7]] = item_obj.category.name.lower()
    item[self.item_labels_[8]] = item_obj.subcategory.name.lower()
    item[self.item_labels_[9]] = item_obj.icon
    return item
