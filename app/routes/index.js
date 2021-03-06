import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      comments: this.store.findAll('comment'),
    });
  },

  actions: {
    destroyArticle(article){
      article.destroyRecord();
      this.transitionTo('index');
    },

    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
     article.save();
     this.transitionTo('index');
   },

    save(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }
});
