import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.article.save();
      this.transitionTo('article/:article_id');
    }
  }
});
