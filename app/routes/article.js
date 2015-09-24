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
    },
    updateComment(comment, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
     comment.save();
     this.transitionTo('article/:article_id');
   },
    deleteComment(comment) {
      if(confirm('Are you sure you want to delete this comment?')) {
        comment.destroyRecord();
      }
    }
  }
});
