import Ember from 'ember';

export default Ember.Component.extend({
  currentArticle: Ember.computed('articles', function() {
    return this.get('articles').get('firstObject');
  }),
  actions: {
    nextArticle() {
      var lastArticle = this.get('articles').pop;
      this.get('articles').shiftObject(lastArticle);
    }
  }
});
