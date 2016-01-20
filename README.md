# ember-cli-jquery-coverflow

An Ember component that integrates the excellent [jQuery Coverflow](http://vanderlee.github.io/coverflow/) widget from [Martijn van der Lee](http://martijn.vanderlee.com) into Ember. Developed for [frontpag.es](http://frontpag.es).

[![Screencap](https://raw.githubusercontent.com/jessepinho/ember-cli-jquery-coverflow/master/screencap.gif)](http://jessepinho.github.io/ember-cli-jquery-coverflow/)
[Interactive demo](http://jessepinho.github.io/ember-cli-jquery-coverflow/) (with code samples)

## Usage

Include the `jquery-coverflow` component in your template as a block. Configure it using options from the [jQuery Coverflow docs](http://vanderlee.github.io/coverflow/). Inside the block, include one `jquery-coverflow-cover` component for each cover you'd like to insert into the coverflow widget.

Example:

```Handlebars
{{#jquery-coverflow density=1
                    enableClick=true
                    enableKeyboard=true
                    enableWheel=false
                    index=0
                    innerAngle=0
                    innerScale=0.95
                    outerAngle=-30
                    outerScale=0.1}}
  {{#each myCovers as |myCover|}}
    {{#jquery-coverflow-cover}}
      {{myCover.content}}
    {{/jquery-coverflow-cover}}
  {{/each}}
{{/jquery-coverflow}}
```

You can also pass a callback for the `animateComplete`, `animateStep`, `change`, `confirm`, and `select` events (again, see [the docs](http://vanderlee.github.io/coverflow/) for more detail):

```Handlebars
{{! app/templates/application.hbs }}

{{#jquery-coverflow select=selectCallback}}
  {{! ... }}
{{/jquery-coverflow}}
```

```JavaScript
// app/controllers/application.js

import Ember from 'ember';

export default Ember.Controller.extend({
  selectCallback: Ember.computed(function() {
    return function(event, cover, index) {
      this.set('currentCoverIndex', index);
    };
  })
});
```

(Note: This pattern of returning a function from a property is a little awkward, and should probably be an action instead. See [issue #1](https://github.com/jessepinho/ember-cli-jquery-coverflow/issues/1).)

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
