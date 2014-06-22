# Contain all the constant used in the project.

from models import category_model
from models import subcategory_model

class Constant():
  categories = {
    'Men': category_model.Category.MEN,
    'Women': category_model.Category.WOMEN,
    'Kids': category_model.Category.KIDS,
    'Electronics': category_model.Category.ELECTRONICS
  }

  subcategories = {
    'Apparels': subcategory_model.SubCategory.APPARELS,
    'Footwear': subcategory_model.SubCategory.FOOTWEAR,
    'Beauty': subcategory_model.SubCategory.BEAUTY,
    'Accessories': subcategory_model.SubCategory.ACCESSORIES,
    'Mobiles And Tablets': subcategory_model.SubCategory.MOBILES_TABLETS,
    'Computers And Laptops': subcategory_model.SubCategory.COMPUTER_LAPTOP,
    'Home Appliances': subcategory_model.SubCategory.HOME_APPLIANCES,
    'Camera': subcategory_model.SubCategory.CAMERAS
 }
