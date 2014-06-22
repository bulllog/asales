# Get data from the database.

from google.appengine.ext import ndb
from models import items
from models import category_model
from models import subcategory_model
from views import constant

import logging

class ItemsApi(ndb.Model):
  def getItems(self, category = None, subcategory = None, is_discounted = None):
    """ Queries the item data table on this basis of the given parameters."""
    Item = items.Item
    items_query = Item.query()
    print category
    #import pdb; pdb.set_trace()    
    if is_discounted:
      logging.info('discounted')
      items_query = items_query.filter(Item.has_discount == True)
    
    if category:
      items_query = items_query.filter(Item.category == constant.Constant.categories[category])
    
    if subcategory:
      items_query = items_query.filter(Item.subcategory == constant.Constant.subcategories[subcategory])
 
    return items_query.fetch()
