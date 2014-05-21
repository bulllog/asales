"""This file reads the data from CSV file and stores all the data in NDB datastore."""

import csv
import webapp2

from models import items


class AddItems(webapp2.RequestHandler):
  """Adds the items to the database."""

  def get(self):
    with open('asales_database.csv', 'rb') as data_file:
      fileReader = csv.DictReader(data_file, delimeter=';')
      for item_info in fileReader:
        has_discount = False
        if item_info['discount']:
          has_discount = True
        itemObj = items.Item(
            category=item_info['category'],
            subcategory=item_info['subcategory'], name=item_info['name'],
            price=item_info['price'], brand_name=item_info['brand_name'],
            has_discount=has_discount, discount=item_info['discount'],
            discounted_price=item_info['discounted_price'],
            description=item_info['description'])
        itemObj.put()
