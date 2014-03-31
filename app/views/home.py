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
        
        categories = ['Men', 'Women', 'Kids', 'Electronics']
        subcategories = [
            'Apparels', 'Footwear', 'Beauty', 'Accessories',
            'Mobiles And Tablets', 'Computers And Laptops', 'Home Appliances', 'Camera'
        ]
        template_value = {
            'categories': categories, 'subcategories': subcategories,
            'category_discounted_items': {
              'Men':[{'id': 'bag', 'actual_cost': 'Rs. 3000', 'discount': '10%', 'discounted_cost': 'Rs. 2700'}], 'Women': [], 'Kids': [], 'Electronics': []
            }
        }
        self.renderTemplate('home.html', template_value);
