#Handler for home page.

from models import category
from models import subcategory
from models import items

import cgi
import pybase

class Home(pybase.PyBase):
    def get(self):
        """ Overrided function of base class a handle get request"""
        item_obj = items.Item()
        item_obj.category = category.Category.MEN
        item_obj.subcategory = subcategory.SubCategory.CLOTHING
        item_obj.item = 'loafers'
        item_obj.price = 500
        item_obj.brand_name = 'Reebok'
        item_obj.has_discount = True
        item_obj.discount = 50
        item_obj.put()
        template_value = {
            'home': 'hi this is home.html'
                }
        self.renderTemplate('home.html', template_value)
