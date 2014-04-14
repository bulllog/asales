#This file contains schema for items datastore.

from google.appengine.ext import ndb
from google.appengine.ext.ndb import msgprop

import category_model
import subcategory_model


class Item(ndb.Model):
<<<<<<< HEAD
    """Models an individual Item entry with category id from category datastore, subcategory id from category datastore, item id, name, price, brand name, has_discount and discount """
    category = msgprop.EnumProperty(category_model.Category, required=True)
    subcategory = msgprop.EnumProperty(subcategory_model.SubCategory, required=True)
    name = ndb.StringProperty(required=True)
    price = ndb.IntegerProperty()
    brand_name = ndb.StringProperty()
    has_discount = ndb.BooleanProperty()
    discount = ndb.FloatProperty()
    discounted_price = ndb.IntegerProperty()
    description = ndb.StringProperty()
=======
  """Models an individual Item entry.
  
  The fields are category id from category datastore, subcategory id from
  category datastore, item id, name, price, brand name, has_discount
  and discount.
  """
  category = msgprop.EnumProperty(category.Category, required=True)
  subcategory = msgprop.EnumProperty(subcategory.SubCategory, required=True)
  item = ndb.StringProperty(required=True)
  price = ndb.IntegerProperty()
  brand_name = ndb.StringProperty()
  has_discount = ndb.BooleanProperty()
  discount = ndb.FloatProperty()
>>>>>>> 63cfb4c8cf26b8ecd087d1b3e56e0f0bd6da342d

    def __getitem__(self, attr):
      """return the value of the given attr property"""
      return self[attr]
