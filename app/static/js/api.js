/**
 * @fileoverview This file contains all the APIs related to the application.
 */

goog.provide('asales.api');

goog.require('goog.events');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');


/**
 * @param {string} category The category whose items are required.
 * @param {string} opt_subcategory The subcategory whose items are required.
 * @param {boolean} opt_isDiscounted Whether discounted items are required or not.
 * @param {function(Object)=} opt_successCallback The success callback function.
 */
asales.api.getItems = function(
    category, subcategory, isDiscounted, opt_successCallback) {
  var url = '/getitems';
  var xhrObj = new goog.net.XhrIo();

  var params = {}
  params['category'] = category;

  if (goog.isDef(subcategory)) {
    params['subcategory'] = subcategory;
  }

  if (goog.isDef(isDiscounted)) {
    params['is_discounted'] = isDiscounted;
  }
 
  if (opt_successCallback) {
    goog.events.listen(xhrObj, goog.net.EventType.COMPLETE, function(e) {
      if (this.isSuccess()) {
        opt_successCallback(this.getResponseJson());
      }
    });
  }
  xhrObj.send(url, 'GET', params);
};

