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

export default Ember.Component.extend({
  didRender() {
    Ember.$(this.get('element')).coverflow(this.get('_options'));
  },

  _refresh: Ember.observer('observeForRefresh', function() {
    Ember.run.next(() => {
      Ember.$(this.get('element')).coverflow('refresh');
    });
  }),

  _options: Ember.computed(optionNames.join(','), function() {
    var options = {};
    optionNames.forEach((option) => {
      if (Ember.typeOf(this.get(option)) !== 'undefined') {
        options[option] = this.get(option);
      }
    });
    return options;
  }),

  _setOption: Ember.observer(optionNames.join(','), function(sender, key) {
    var $element = Ember.$(this.get('element'));
    $element.coverflow('destroy');
    $element.coverflow(this.get('_options'));
  })
});
