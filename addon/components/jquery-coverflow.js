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

  _emitInit: Ember.on('init', function() {
    this.sendAction('onInit', this);
  }),

  _refresh: Ember.observer('observeForRefresh', function() {
    console.log('_refresh');
    Ember.run.next(() => {
      Ember.$(this.get('element')).coverflow('refresh');
    });
  }),

  _options: Ember.computed(optionNames.join(','), function() {
    console.log('_options');
    var options = {};
    optionNames.forEach((option) => {
      if (Ember.typeOf(this.get(option)) !== 'undefined') {
        options[option] = this.get(option);
      }
    });
    return options;
  }),

  _setOption: Ember.observer(optionNames.join(','), function() {
    console.log('_setOption');
    var $element = Ember.$(this.get('element'));
    $element.coverflow('destroy');
    $element.coverflow(this.get('_options'));
  }),

  _setCurrentIndex: Ember.observer('currentIndex', function() {
    Ember.$(this.get('element')).coverflow('index', this.get('currentIndex'));
  })
});
