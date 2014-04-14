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
        #item_obj.subcategory = subcategory_model.SubCategory.CLOTHING
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
