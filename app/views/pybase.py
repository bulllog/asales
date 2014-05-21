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
