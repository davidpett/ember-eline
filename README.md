# ember-eline

Ember SVG line icon components ported from http://jxnblk.com/reline/

## Installation

```ember install ember-eline```

## Usage

You can easily use the provided components `{{e-icon}}` with the many properties to create your icons.

### Properties
* `name` - key for icon name, one of the following:
  * `x` _(default)_
  * `plus`
  * `minus`
  * `burger`
  * `square`
  * `diamond`
  * `chevron`
  * `arrow`
  * `triangle`
* `direction` - use with "chevron", "arrow", or "triangle"
  * `up`
  * `down`
  * `left`
  * `right` _(default)_
* `size` - _default "16"_
* `strokeWidth` - _default "3"_

In addition, it supports the margin properties from [understyle](https://github.com/jxnblk/understyle#margin)

### Examples
```
{{e-icon name="triangle" direction="left" size="24" strokeWidth="1"}}
```

It is also possible to use the `{{e-line}}` component and pass a `path` property. This works if you are using the [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers) addon.
```
{{e-line path=(array (array 0 0) (array 16 16))}}
```
