#This is main handler for application.

import webapp2

from views import home
from views import items
from views import get_items

app = webapp2.WSGIApplication([
    ('/', home.Home),
    ('/items', items.Items),
    ('/getitems', get_items.GetItems)
            ], debug=True) 
