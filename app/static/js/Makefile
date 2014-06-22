# This is a make file for all the js files

# src path

api = api.js
base = base.js
discounted_items = discounted_items.js
items = items.js
soy_templates = soy_templates.js
soyutils = soyutils.js

files = ${base} ${api} ${discounted_items} ${items} ${soy_templates} ${soyutils}

asales.js: ${files}
	cat > $@ $^

