import Ember from 'ember';
import layout from '../templates/components/e-icon';
import createShapes from '../utils/create-shapes';

const {
  computed,
  get
} = Ember;

export default Ember.Component.extend({
  tagName: '',

  m: null,
  mt: null,
  mr: null,
  mb: null,
  ml: null,
  mx: null,
  my: null,
  name: 'x',
  direction: 'right',
  size: 16,
  strokeWidth: 3,

  paths: computed('name', 'direction', 'strokeWidth', function() {
    let shapes = createShapes(get(this, 'strokeWidth'));
    let direction = get(this, 'direction');
    let name = get(this, 'name');

    if (!shapes[name]) {
      return shapes.x;
    }

    return shapes[name][direction] || shapes[name];
  }),

  layout
});
