# This file contains urls of the application.

import webapp2

from views import add_items
from views import get_items
from views import home
from views import item_details
from views import items
from views import payment

app = webapp2.WSGIApplication([
    ('/', home.Home),
    ('/items', items.Items),
    ('/getitems', get_items.GetItems),
    ('/item_details', item_details.ItemDetails),
    ('/payment', payment.Payment),
    ('/add/items', add_items.AddItems)
    ], debug=True)
