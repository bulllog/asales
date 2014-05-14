/**
 * @fileoverview This file contains all the functions related to items
 *      list view and grid view. It also provides the options for
 *      filtering the items.
 */


goog.provide('asales.Items');

goog.require('goog.dom');
goog.require('goog.soy');
goog.require('goog.Uri');
//goog.require('asales.templates');



/**
 * @constructor
 */
asales.Items = function() {
  var uriObj = goog.Uri.create(window.location);
  this.category = '';
  this.subcategory = '';
  this.isDiscounted = false;
};
