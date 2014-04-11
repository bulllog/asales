#Get data from the database.

from models import items

class ItemsApi():
  def getItems(category = None, subcategory = None, discounted = False):
    """ Queries the item data table on this basis of the given parameters."""
    item_query = items.Item.query()
    return item_query.fetch()
