var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var AboutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
        return (
            <div className="modal fade about-modal-container" id="aboutModal" tabIndex="-1" role="dialog">
              <div className="modal-dialog modal-lg">
                <div className="modal-content about-modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">About Us</h4>
                  </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-5">
                          <img className="main-about-pic img-responsive" src="images/about.gif" />
                        </div>
                        <div className="col-md-7">
                          <h4>[ soo-ko-tai ]</h4>
                          <p>
                            Meaning ‘Dawn of Happiness,’ is a word that stirs the imagination of the Thai people.
                            Another meaning could be ‘Dawn of the Kingdom of Thailand,’ as Sukhothai was the
                            first free Thai city, founded in 1238 A.D., after two Thai chieftans liberated the city
                            from Khmer rule.  Sukhothai thus became the seat of the first Siamese Kingdom, and
                            the centerpoint of an era of material prosperity, artistic greatness, and cultural
                            development known today at the ‘Golden Age’ of Thai history.
                          </p>
                          <p>
                            A frequent stop between India and China, and the curries and stir-fried foods in Thai
                            cooking are reminders of the past. But Thai cuisines true uniqueness results from
                            combining these outside influences with indigenous aromatic herbs and pungent
                            spices, especially Thai chillies.

                            We endeavor to bring you the true cuisine of the Thailand. As in Thailand, our menu
                            items are served ala-cart, and most entries are served with Jasmine rice. Each item is
                            prepared individually using fresh ingredients and our own homemade sauces. To
                            preservatives or MSG are used in our cooking. Please order your preferred level of
                            spiciness.
                          </p>
                        </div>
                      </div>
                    </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default about-close-btn" onClick={this.handleReturn} data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
      )
    }
  });



module.exports = {
  AboutComponent: AboutComponent
}
