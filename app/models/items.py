#This file contains schema for items datastore.

from google.appengine.ext import ndb
from google.appengine.ext.ndb import msgprop

import category
import subcategory


class Item(ndb.Model):
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

