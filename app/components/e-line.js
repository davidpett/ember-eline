import Ember from 'ember';
import layout from '../templates/components/e-line';
import understyle from 'npm:understyle';

const {
  computed,
  get,
  String: { dasherize, htmlSafe },
  toArray
} = Ember;

export default Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: [
    'fill',
    'height',
    'stroke',
    'strokeWidth:stroke-width',
    'style',
    'viewBox',
    'width',
    'xmlns'
  ],

  fill: 'none',
  height: computed.readOnly('size'),
  m: null,
  mt: null,
  mr: null,
  mb: null,
  ml: null,
  mx: null,
  my: null,
  path: null,
  paths: [],
  size: 16,
  margins: computed('m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'gutter', function() {
    let margins = this.getProperties('m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'gutter');
    let result = [];
    for (let key in margins) {
      if (margins[key]) {
        margins[key] = parseInt(margins[key]);
      }
    }
    let marginsStyle = understyle.margin(margins);
    if (Object.keys(marginsStyle).length) {
      for (let key in marginsStyle) {
        result.push(`${dasherize(key)}: ${marginsStyle[key]}px`);
      }
    }
    return result;
  }),
  style: computed('margins', function() {
    let style = [];
    get(this, 'margins').forEach((item) => {
      style.push(item);
    })
    style.push(`display: inline-block`);
    style.push(`overflow: visible`);
    style.push(`verticalAlign: middle`);
    return htmlSafe(style.join('; '));
  }),
  stroke: 'currentcolor',
  strokeWidth: 3,
  viewBox: '0 0 16 16',
  width: computed.readOnly('size'),
  xmlns: 'http://www.w3.org/2000/svg',

  layout
});
