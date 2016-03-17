var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var menu = [
  {
    "dish": "Three Flavor Whole Fish w/ Shrimp and Scallops",
    "description": "Our popular one to two pound whole fish-of-the-day, lightly battered and deep fried to seal in the flavor, served over our special three-flavor vegetable stir-fry, topped with large shrimp and sea scallops.",
    "price": "21.99",
    "category": "specials"
  },
  {
    "dish": "Sukho Thai Dumplings",
    "description": "Minced pork, chicken and shrimp or crab, water chestnut, green onion and seasonings in a steamed wonton, w/ dim sum sauce.",
    "price": "10.95",
    "category": "appetizers"
  },
  {
    "dish": "Tom Kha",
    "description": "Sliced chicken or fish, fresh button mushrooms in coconut cream soup seasoned with galangal, lemon grass, kaffir lime leaves, exotic spices, topped with cilantro.",
    "price": "5.95",
    "category": "soups"
  },
  {
    "dish": "Pad Thai",
    "description": "Thin rice noodles pan-fried in a tamarind sauce with meat of choice, bean sprouts, green onion and egg. Garnished with peanuts, bean sprouts, green onion or chives, and lime.",
    "price": "12.95",
    "category": "noodles"
  }
  ]

    module.exports = {
      menu: menu,
    }
