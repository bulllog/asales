"""This file reads the data from CSV file and stores all the data in NDB datastore."""

import csv
import logging
import os.path
import webapp2

from models import items
from views import constant


class AddItems(webapp2.RequestHandler):
  """Adds the items to the database."""

  def get(self):
    folder = os.path.dirname(os.path.realpath(__file__))
    file_path = os.path.join(folder, '../asales_database.csv')
    categories_map = constant.Constant.categories
    subcategories_map = constant.Constant.subcategories

    with open(file_path, 'rb') as data_file:
      fileReader = csv.DictReader(data_file, delimiter=';')
      for item_info in fileReader:
        has_discount = False
        logging.info('Item Details: %s', str(item_info))
        if float(item_info['discount']):
          has_discount = True

        for key, value in categories_map.iteritems():
          if value.number == int(item_info['category']):
            category = value
        for key, value in subcategories_map.iteritems():
          if value.number == int(item_info['subcategory']):
            subcategory = value

        itemObj = items.Item(
            category=category, subcategory=subcategory, name=item_info['name'],
            price=int(item_info['price']), brand_name=item_info['brand_name'],
            has_discount=has_discount, discount=float(item_info['discount']),
            discounted_price=int(item_info['discounted_price']),
            description=item_info['description'])
        itemObj.put()
