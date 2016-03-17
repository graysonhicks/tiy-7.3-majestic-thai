var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var SectionComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleAdd: function(e){
    e.preventDefault();
    console.log('add');
  },
  render: function(){
    var mapMenu = function(item){
        return(
          <div key={item.get('cid')}>
            <div className="col-md-11 item-descriptions">
              <h5>{item.get('dish')}</h5>
              <p>{item.get('description')}</p>
              <span>${item.get('price')}</span>
            </div>
            <div className="col-md-1 menu-add-btn-container">
              <button type="button" className="btn btn-default menu-add-btn" onClick={this.handleAdd}><i className="fa fa-shopping-basket"></i></button>
            </div>
          </div>
        )
      }

    var filterMenu = function(item){
      console.log(this.props.category);
      return item.get('category') == this.props.category
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
