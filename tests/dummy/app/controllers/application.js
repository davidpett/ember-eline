import Ember from 'ember';

const {
  computed,
  get,
  set
} = Ember;

export default Ember.Controller.extend({
  color: null,
  strokeWidth: 3,
  size: 96,

  hexToRgb(value) {
    let val = value || '#000000';
    let color = val.substring(1);
    return {
      r: parseInt(color.substring(0, 2), 16),
      g: parseInt(color.substring(2, 4), 16),
      b: parseInt(color.substring(4, 6), 16)
    };
  },
  colorOneRgb: computed('color.color_one', function() {
    return this.hexToRgb(get(this, 'color.color_one'));
  }),

  init() {
    Ember.$.getJSON('http://www.randoma11y.com/stats/').then((data) => {
      let colors = data['most_active_20'];
      let color = colors[Math.floor(Math.random() * colors.length)];
      set(this, 'color', color);
    });
  }
});
