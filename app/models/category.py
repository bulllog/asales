#This file contain all posible values for categories.

from protorpc import messages

class Category(messages.Enum):
    """Enum for category"""
    MEN = 1
    WOMEN = 2
    KIDS = 3
    ELECTRONICS = 4
