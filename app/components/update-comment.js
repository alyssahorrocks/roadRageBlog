import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,
  actions: {
   updateCommentForm() {
     this.set('formShowing', true);
   },
   updateComment(comment) {
     var params = {
       username: this.get('username'),
       content: this.get('content'),
     };
     this.set('formShowing', false);
     this.sendAction('updateComment', comment, params);
   }
 }
});
