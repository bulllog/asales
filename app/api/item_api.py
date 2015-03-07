# Get data from the database.

from google.appengine.ext import ndb
from models import items
from models import category_model
from models import subcategory_model
from views import constant

import logging

class ItemApi(ndb.Model):
  def getItem(self, item_name):
    """ Queries the item data table on this basis of the given parameters."""
    Item = items.Item
    items_query = Item.query()
    print item_name
    if item_name:
      logging.info('Selected item ' + item_name);
      items_query = items_query.filter(Item.icon == item_name)
    return items_query.fetch()
