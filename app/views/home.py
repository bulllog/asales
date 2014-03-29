#Handler for home page.


import cgi
import pybase

class Home(pybase.PyBase):
    def get(self):
        """ Overrided function of base class"""
        categories = ['Men', 'Women', 'Kids', 'Electronics']
        sub_categories = [
            'Apparels', 'Footwear', 'Beauty', 'Accessories',
            'Mobiles And Tablets', 'Computers And Laptops, Home Appliances'
        ]
        template_value = {
            'categories': categories, 'sub_categories': sub_categories,
            'discounted_items': {}
        }
        self.renderTemplate('home.html', template_value);

