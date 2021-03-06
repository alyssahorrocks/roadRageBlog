import DS from 'ember-data';

export default DS.Model.extend({
  username:DS.attr(),
  content:DS.attr(),
  article: DS.belongsTo('article', {async: true}),
});
