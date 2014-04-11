#API handler for request to get items.

from api import items_api
import pybase


class GetItems(pybase.PyBase):
  def get(self):
    """Overrided function of base class to handle get request."""
    selected_items = items_api.ItemsApi.getItems()
    self.response.out.write(selected_items)
