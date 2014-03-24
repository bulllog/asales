#This is main handler for application.

import webapp2
from views import home

app = webapp2.WSGIApplication([
    ('/', home.Home)
            ], debug=True) 
