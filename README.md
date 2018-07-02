
LineUp.js Vue.js Wrapper
=========================

[![License: MIT][mit-image]][mit-url] [![NPM version][npm-image]][npm-url]  [![CircleCI][ci-image]][ci-url]

LineUp is an interactive technique designed to create, visualize and explore rankings of items based on a set of heterogeneous attributes.
This is a [Vue.js](https://vuejs.org) wrapper around the JavaScript library [LineUp.js](https://github.com/datavisyn/lineupjs). Details about the LineUp visualization technique can be found at [http://lineup.caleydo.org](http://lineup.caleydo.org).

Usage
-----

**Installation**

```bash
npm install --save vue-lineup@next
```

**Minimal Usage Example**

```ts
const cats = ['c1', 'c2', 'c3'];
const data = [];
for (let i = 0; i < 100; ++i) {
  data.push({
    a: Math.random() * 10,
    d: 'Row ' + i,
    cat: cats[Math.floor(Math.random() * 3)],
    cat2: cats[Math.floor(Math.random() * 3)],
  });
}

// enable plugin to register components
Vue.use(VueLineUp);

const app = new Vue({
  el: '#app',
  template: `<LineUp v-bind:data="data" />`,
  data: {
    cats,
    data
  }
});
```

[CodePen](https://codepen.io/sgratzl/pen/pKGmvK)

![Minimal Result](https://user-images.githubusercontent.com/4129778/34654173-32180ff8-f3f8-11e7-8469-229fa34a65dc.png)


**Advanced Usage Example**

`App.vue`:
```ts
const app = new Vue({
  el: '#app',
  template: `<LineUp v-bind:data="data" defaultRanking="true" style="height: 800px">
    <LineUpStringColumnDesc column="d" label="Label" v-bind:width="100" />
    <LineUpCategoricalColumnDesc column="cat" v-bind:categories="cats" color="green" />
    <LineUpCategoricalColumnDesc column="cat2" v-bind:categories="cats" color="blue" />
    <LineUpNumberColumnDesc column="a" v-bind:domain="[0, 10]" color="blue" />
    <LineUpRanking groupBy="cat" sortBy="a:desc">
      <LineUpSupportColumn type="*" />
      <LineUpColumn column="*" />
    </LineUpRanking>
  </LineUp>`,
  data: {
    cats,
    data
  }
});
```

[CodePen](https://codepen.io/sgratzl/pen/vrboWB)

![Advanced Result](https://user-images.githubusercontent.com/4129778/34654174-3235f784-f3f8-11e7-9361-44f5fa068bb9.png)


Supported Browsers
------------------

 * Chrome 64+ (best performance)
 * Firefox 57+
 * Edge 16+



Development Environment
-----------------------

**Installation**

```bash
git clone https://github.com/datavisyn/vue-lineup.git
cd vue-lineup
npm install
```

**Build distribution packages**

```bash
npm run build
```

**Run Linting**

```bash
npm run lint
```


**Serve integrated webserver**

```bash
npm start
```


Authors
-------

 * Samuel Gratzl (@sgratzl)

[npm-image]: https://badge.fury.io/js/vue-lineup.svg
[npm-url]: https://npmjs.org/package/vue-lineup
[mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[mit-url]: https://opensource.org/licenses/MIT
[ci-image]: https://circleci.com/gh/datavisyn/vue-lineup.svg?style=shield
[ci-url]: https://circleci.com/gh/datavisyn/vue-lineup
