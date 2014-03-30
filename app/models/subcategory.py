#This file contain all possible values for subcategories.


from protorpc import messages

class SubCategory(messages.Enum):
    """Enum for subcategory"""
    CLOTHING = 1
    FOOTWEAR = 2
    ACCESSORIES = 3
    WATCHES = 4
    COMPUTERS_LAPTOP = 5
    MOBILE_TABLET = 6
    HOME_APPLIANCES = 7
    CAMERA = 8
