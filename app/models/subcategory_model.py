# This file contain all possible values for subcategories.

from protorpc import messages


class SubCategory(messages.Enum):
  """Enum for subcategory."""
  APPARELS = 1
  FOOTWEAR = 2
  BEAUTY = 3
  ACCESSORIES = 4
  MOBILES_TABLETS = 5
  COMPUTER_LAPTOP = 6
  HOME_APPLIANCES = 7
  CAMERAS = 8
