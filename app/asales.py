# This is main handler for application.

import webapp2

from views import get_items
from views import home
from views import item_details
from views import items
from views import payment

app = webapp2.WSGIApplication([
    ('/', home.Home),
    ('/items', items.Items),
    ('/getitems', get_items.GetItems),
    ('/item/details', item_details.ItemDetails),
    ('/payment', payment.Payment)
            ], debug=True) 
