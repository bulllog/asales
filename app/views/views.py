#This file contain ll the basic utilities

import jinja2
import os
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__), '../templates')),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class PyBase(webapp2.RequestHandler):
 
    categories = ['men', 'women', 'kids', 'electronics']
    print categories
    subcategories = [
        'apparels', 'footwear', 'beauty', 'accessories',
        'mobiles & tablets', 'computers & laptops', 'home appliances', 'camera'
    ]
    
    """Implemented in the inhereted files."""
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
        #item_obj = items.Item()
        #item_obj.category = category_model.Category.MEN
        #item_obj.subcategory = subcategory_model.SubCategory.FOOTWEAR
        #item_obj.name = 'loafers'
        #item_obj.price = 500
        #item_obj.brand_name = 'Reebok'
        #item_obj.has_discount = True
        #item_obj.discount = 50
        #item_obj.discounted_price = 250
        #item_obj.description = 'this is cool stuff and blah blah :P'
        #item_obj.put()
        
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
        'price': 'Dummy Cost', 'description': 'Dummy Description'
    }
    self.renderTemplate('item.html', item)

"""This file contains handler for payment."""

import pybase


class Payment(pybase.PyBase):
  """Handler for payment."""

  def get(self):
    self.renderTemplate(payment.html)

