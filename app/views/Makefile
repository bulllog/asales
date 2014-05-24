# Makefile for views of asales application


pybase = pybase.py
home = home.py
items = items.py
item_details = item_details.py
payment = payment.py
add_items = add_items.py
get_items = get_items.py

files = ${pybase} ${home} ${items} ${item_details} ${payment} ${add_items} ${get_items}

views.py: ${files}
	cat > $@ $^
