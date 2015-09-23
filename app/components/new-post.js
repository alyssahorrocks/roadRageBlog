import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    articleFormShow() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image'),
      }
      this.sendAction('save', params),
      this.set('addNewPost', false);
    }
  }
});
