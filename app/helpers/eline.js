import Ember from 'ember';

export function eline(params) {
  let [args] = params;
  return args.map(([x, y], i) => {
    return i === 0 ? `M${x} ${y}` : x === 'z' ? 'z' : `L${x} ${y}`;
  }).join(' ');
}

export default Ember.Helper.helper(eline);
