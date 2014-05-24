#This file contain ll the basic utilities

import jinja2
import os
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), '../templates')),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class PyBase(webapp2.RequestHandler):

    categories = ['Men', 'Women', 'Kids', 'Electronics']
    subcategories = [
        'Apparels', 'Footwear', 'Beauty', 'Accessories', 'Mobiles And Tablets',
        'Computers And Laptops', 'Home Appliances', 'Camera'
    ]

    def get(self):
        pass

    def post(self):
        pass

    def renderTemplate(self, template_name, opt_template_values={}):
        template = JINJA_ENVIRONMENT.get_template(template_name)
        self.response.write(template.render(opt_template_values))
#Handler for home page.

from models import category_model
from models import subcategory_model
from models import items

import cgi
import pybase
import constant

class Home(pybase.PyBase):
    def get(self):
        """ Overrided function of base class a handle get request"""
        categories = self.categories
        subcategories = self.subcategories
        template_value = {
            'categories': categories, 'subcategories': subcategories,
            'category_discounted_items': {
              'Men':[{'id': 'bag', 'actual_cost': 'Rs. 3000', 'discount': '10%', 'discounted_cost': 'Rs. 2700'}], 'Women': [], 'Kids': [], 'Electronics': []
            }
        }
        self.renderTemplate('home.html', template_value);
#Handler for items page.

import cgi
import pybase

class Items(pybase.PyBase):
    def get(self):
        """ Overrided function of base class to handle get request """
        categories = self.categories
        subcategories = self.subcategories
        template_value = {
                'categories': categories,
                'subcategories': subcategories,
                'items': [{
                    'name': 'Loafers',
                    'brand_name': 'Woodland',
                    'price': '1500',
                    'discount': '30',
                    'discounted_price': '1050',
                    'icon': 'woodland',
                    'desc': 'cool woodland shoes with strong leather'
                    },{
                    'name': 'Canvas',
                    'brand_name': 'Reebok',
                    'price': '2500',
                    'discount': '20',
                    'discounted_price': '500',
                    'icon': 'woodland',
                    'desc': 'awesome shoes from reebok give you a comfort with looks'
                        }],
                'columns': {
                    'name': 'Product Name',
                    'brand_name': 'Brand',
                    'price': 'Price',
                    'discount': 'Discount',
                    'icon': 'Product Picture',
                    'discounted_price': 'Price After Discount',
                    'desc': 'About Product'
                    },
                'properties': [
                    'name', 'brand_name', 'price', 'discount', 'discounted_price', 'icon'
                    ]
            }
        self.renderTemplate('items.html', template_value)
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

"""This file contains handler for payment."""

import pybase


class Payment(pybase.PyBase):
  """Handler for payment."""

  def get(self):
    self.renderTemplate(payment.html)

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
#API handler for request to get items.

from api import items_api

import json
import pybase


class GetItems(pybase.PyBase):
  """Handler to fetch the items on the given request."""
  item_labels_ = [
      'name', 'brand_name', 'price', 'is_discounted', 'discount',
      'discounted_price', 'description'
  ]

  def get(self):
    """Overrided function of base class to handle get request."""
    selected_item = []
    is_discounted = self.request.get('is_discounted')
    category = self.request.get('category')
    subcategory = self.request.get('subcategory')
    items_obj = items_api.ItemsApi()
    items = items_obj.getItems(category, subcategory, is_discounted)
    for item in items:
      selected_item.append(self.formatQueryResult(item))

    response = {
        'items': selected_item,
        'status': 'success'
        }
    self.response.out.write(json.dumps(response))

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
    return item
