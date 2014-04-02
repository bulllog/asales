#!/bin/bash

echo 'Let the game begin..'

cd ~/appengine_product/asales/app/static/sytles

make asales.css

dev_appserver --port==8080 ../../../app


