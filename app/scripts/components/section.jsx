var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var SectionComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var mapMenu = function(item){
        return(
          <div key={Date.now()}>
            <h5>{item.attributes.dish}</h5>
            <p>{item.attributes.description}</p>
            <span>${item.attributes.price}</span>
          </div>
        )
      }

    var filterMenu = function(item){
      console.log(this.props.category);
      return item.attributes.category == this.props.category
    }
    return (
      <div className="menu-items">
        {(this.props.collection.filter(filterMenu.bind(this)).map(mapMenu.bind(this)))}
      </div>

    )
  }
});

  module.exports = {
    SectionComponent: SectionComponent
  }
