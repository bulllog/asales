# Makefile for views of asales application


pybase = pybase.py
home = home.py
items = items.py
item_details = item_details.py
payment = payment.py

files = ${pybase} ${home} ${items} ${item_details} ${payment}

views.py: ${files}
	cat > $@ $^
