"""This file contains handler for payment."""

import pybase


class Payment(pybase.PyBase):
  """Handler for payment."""

  def get(self):
    self.renderTemplate('payment.html', {})

