#Handler for home page.


import cgi
import pybase

class Home(pybase.PyBase):
    def get(self):
        """ Overrided function of base class"""
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

