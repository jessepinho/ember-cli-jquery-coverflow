/* global componentHandler */
import Ember from 'ember';

var optionNames = ['animateStep',
                   'animateComplete',
                   'change',
                   'confirm',
                   'density',
                   'duration',
                   'easing',
                   'enableClick',
                   'enableKeyboard',
                   'enableWheel',
                   'index',
                   'innerAngle',
                   'innerCss',
                   'innerOffset',
                   'innerScale',
                   'outerAngle',
                   'outerCss',
                   'outerOffset',
                   'outerScale',
                   'select'];

export default Ember.Controller.extend({
  numberOfCovers: 25,

  covers: Ember.computed('numberOfCovers', function() {
    var covers = Ember.A([]);
    for (var idx = 1; idx <= this.get('numberOfCovers'); idx++) {
      covers.push(idx);
    }
    return covers;
  }),

  upgradeDom: Ember.on('init', function() {
    Ember.run.schedule('afterRender', () => {
      componentHandler.upgradeDom();
    });
  }),

  // Properties bound to coverflow:
  density: 1,
  enableClick: true,
  enableKeyboard: true,
  enableWheel: false,
  index: 0,
  innerAngle: 0,
  innerScale: 0.95,
  outerAngle: -30,
  outerScale: 0.1,

  observeForRefresh: Ember.computed(`numberOfCovers,${optionNames.join(',')}`, function() {
    return Date.now();
  })
});
