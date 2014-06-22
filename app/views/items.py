#Handler for items page.

import cgi
import pybase
import logging

from api import items_api
class Items(pybase.PyBase):
    def get(self):
        """ Overrided function of base class to handle get request """
        
        is_discounted = self.request.get('discounted')
        selected_category = self.request.get('category')
        selected_subcategory = self.request.get('subcategory')
        logging.info('items -> discount = ' + is_discounted + ' category = ' + selected_category + ' subcategory = ' + selected_subcategory)
        categories = self.categories
        subcategories = self.subcategories
        #items_obj = items_api.ItemsApi()
        #items = items_obj.getItems(selected_category, selected_subcategory, is_discounted)
        #print items

        #properties = [
            #'name', 'brand_name', 'price', 'discount', 'discounted_price', 'icon'
            #]

        #columns = {
            #'name': 'Product Name',
            #'brand_name': 'Brand',
            #'price': 'Price',
            #'discount': 'Discount',
            #'icon': 'Product Picture',
            #'discounted_price': 'Price After Discount',
            #'desc': 'About Product'
            #}

        template_value = {
            'is_discounted': is_discounted,
            'selected_category': selected_category,
            'selected_subcategory': selected_subcategory,
            'categories': categories,
            'subcategories': subcategories,
            #'properties' : properties,
            #'columns': columns
        }
        #template_value = {
                #'categories': categories,
                #'subcategories': subcategories,
                #'items': [{
                    #'name': 'Loafers',
                    #'brand_name': 'Woodland',
                    #'price': '1500',
                    #'discount': '30',
                    #'discounted_price': '1050',
                    #'icon': 'woodland',
                    #'desc': 'cool woodland shoes with strong leather'
                    #},{
                    #'name': 'Canvas',
                    #'brand_name': 'Reebok',
                    #'price': '2500',
                    #'discount': '20',
                    #'discounted_price': '500',
                    #'icon': 'woodland',
                    #'desc': 'awesome shoes from reebok give you a comfort with looks'
                        #}],
                #'columns': {
                    #'name': 'Product Name',
                    #'brand_name': 'Brand',
                    #'price': 'Price',
                    #'discount': 'Discount',
                    #'icon': 'Product Picture',
                    #'discounted_price': 'Price After Discount',
                    #'desc': 'About Product'
                    #},
                #'properties': [
                    #'name', 'brand_name', 'price', 'discount', 'discounted_price', 'icon'
                    #]
            #}
        self.renderTemplate('items.html', template_value)
