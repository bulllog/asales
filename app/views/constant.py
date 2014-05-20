# Contain all the constant used in the project.

from models import category_model
from models import subcategory_model

class Constant():
  categories = {
    'men': category_model.Category.MEN,
    'women': category_model.Category.WOMEN,
    'kids': category_model.Category.KIDS,
    'electronics': category_model.Category.ELECTRONICS
  }

  subcategories = {
    'apparels': subcategory_model.SubCategory.APPARELS,
    'footwear': subcategory_model.SubCategory.FOOTWEAR,
    'beauty': subcategory_model.SubCategory.BEAUTY,
    'accesories': subcategory_model.SubCategory.ACCESSORIES,
    'mobile & tablet': subcategory_model.SubCategory.MOBILE_TABLET,
    'computer & laptop': subcategory_model.SubCategory.COMPUTER_LAPTOP,
    'home appliances': subcategory_model.SubCategory.HOME_APPLIANCES,
    'camera': subcategory_model.SubCategory.CAMERA
 }
