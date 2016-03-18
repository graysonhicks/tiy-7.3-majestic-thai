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
    "price": 21.99,
    "category": "specials"
  },
  {
    "dish": "Sukho Thai Dumplings",
    "description": "Minced pork, chicken and shrimp or crab, water chestnut, green onion and seasonings in a steamed wonton, w/ dim sum sauce.",
    "price": 10.95,
    "category": "appetizers"
  },
  {
    "dish": "Tom Kha",
    "description": "Sliced chicken or fish, fresh button mushrooms in coconut cream soup seasoned with galangal, lemon grass, kaffir lime leaves, exotic spices, topped with cilantro.",
    "price": 5.95,
    "category": "soups"
  },
  {
    "dish": "Pad Thai",
    "description": "Thin rice noodles pan-fried in a tamarind sauce with meat of choice, bean sprouts, green onion and egg. Garnished with peanuts, bean sprouts, green onion or chives, and lime.",
    "price": 12.95,
    "category": "noodles"
  },
  {
    "dish": "Drunken Noodles",
    "description": "Wide rice noodles stir-fried in a spicy roasted chili paste with garlic, onion, carrot, broccoli, cabbage, bell peppers, sweet basil and egg.",
    "price": 12.95,
    "category": "noodles"
  },
  {
    "dish": "Rad Na Noodles",
    "description": "Wide rice noodles in a hearty sesame soy sauce with Chinese rice wine, Chinese broccoli and/or broccoli, fermented soybean, carrot, and 3 mushroom varieties.",
    "price": 14.95,
    "category": "noodles"
  },
  {
    "dish": "Tom Yum",
    "description": "A hot and sour feast of fresh button mushrooms, lemon grass, kaffir lime leaves and exotic roasted spices blended in a seafood broth with lime juice.",
    "price": 4.95,
    "category": "soups"
  },
  {
    "dish": "Broken Net",
    "description": "Mixed seafood treat with shrimp, calamari, scallops, and mussels in a clear hot and sour sweet basil seafood broth.",
    "price": 9.95,
    "category": "soups"
  },
  {
    "dish": "Royal Basil Duck",
    "description": "Crispy and tender fried boneless half of a whole duck with savory holy basil sauce, a crisp medley of fresh vegetables, and garnished with crispy fried basil leaves.",
    "price": 29.95,
    "category": "specials"
  },
  {
    "dish": "Volcano or Basil Softshell Crab",
    "description": "A pair of softshell crabs lightly battered in Panko bread crumbs, served over mixed vegetables in a sizzling pineapple chili volcano sauce.",
    "price": 23.95,
    "category": "specials"
  },
  {
    "dish": "Chicken or Shrimp Satay",
    "description": "Skewered and grilled strips of chicken breast or shrimp marinated in yellow coconut curry served with peanut sauce and cucumber salad.",
    "price": 8.95,
    "category": "appetizers"
  },
  {
    "dish": "Shrimp-in-a-Pouch",
    "description": "Gulf shrimp and chicken in an herbal sesame stuffing, served in a golden-brown wanton pouch with our plum dipping sauce.",
    "price": 8.95,
    "category": "appetizers"
  }
  ]

    module.exports = {
      menu: menu,
    }
