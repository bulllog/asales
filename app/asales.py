#This is main handler for application.

import webapp2

from views import home
from views import items

app = webapp2.WSGIApplication([
    ('/', home.Home),
    ('/items', items.Items)
            ], debug=True) 
