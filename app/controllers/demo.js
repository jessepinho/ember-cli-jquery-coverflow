import Ember from 'ember';

export default Ember.Controller.extend({
  numberOfCovers: 25,

  covers: Ember.computed('numberOfCovers', function() {
    var covers = Ember.A([]);
    for (var idx = 1; idx <= this.get('numberOfCovers'); idx++) {
      covers.push(`#${idx}`);
    }
    return covers;
  }),

  // Properties bound to coverflow:
  enableWheel: true,
  innerAngle: 0,
  innerScale: 0.95,
  outerAngle: -30,
  outerScale: 0.1,
  observeForRefresh: Ember.computed('numberOfCovers', function() {
    return Date.now();
  })
});
