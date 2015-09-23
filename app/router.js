import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('article',{path: '/article/:article_id'});
  this.route('newpost');
});

export default Router;
