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
