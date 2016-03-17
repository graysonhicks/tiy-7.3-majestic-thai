var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var SectionComponent = require('./section.jsx').SectionComponent;

var MenuComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      category: "appetizers"
    }
  },
  setCategory: function(category){
    this.setState({"category": category});
  },
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
          return (
            <div className="modal fade menu-modal-container" id="menuModal" tabIndex="-1" role="dialog" aria-labelledby="menuModalLabel">
              <div className="modal-dialog modal-lg menu-modal-dialog" role="document">
                <div className="modal-content menu-modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" onClick={this.handleReturn} aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <button type="button" onClick={this.setCategory.bind(this, "appetizers")} className="menu-modal-btn btn btn-default">Appetizers</button>
                    <button type="button" onClick={this.setCategory.bind(this, "soups")} className="menu-modal-btn btn btn-default">Soups</button>
                    <button type="button" onClick={this.setCategory.bind(this, "specials")} className="menu-modal-btn btn btn-default">Specials</button>
                    <button type="button" onClick={this.setCategory.bind(this, "noodles")} className="menu-modal-btn btn btn-default">Noodles</button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-9 menu-section-info">
                          <SectionComponent collection={this.props.collection} category={this.state.category}/>
                      </div>
                      <div className="col-md-3">
                        <h4>Your Order</h4>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" data-dismiss="modal" onClick={this.handleReturn} className="btn btn-default  menu-modal-footer-btn">Close</button>
                    <button type="button" className="btn btn-success menu-modal-footer-btn">Order</button>
                  </div>
                </div>
              </div>
            </div>
      )
    }
  });

  module.exports = {
    MenuComponent: MenuComponent
  }
