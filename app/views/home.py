#Handler for home page.


import cgi
import pybase

class Home(pybase.PyBase):
    def get(self):
        """ Overrided function of base class"""
        self.renderTemplate('home.html');

