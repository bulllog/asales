#Handler for items page.

import cgi
import pybase

class Items(pybase.PyBase):
    def get(self):
        """ Overrided function of base class o handle get request"""
        template_value = {
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
