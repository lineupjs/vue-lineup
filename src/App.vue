<template>
  <div id="app">
    <img src="./assets/logo.png">
    <LineUp v-bind:data="data"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LineUp from './components/LineUp.vue';

@Component({
  components: {
    LineUp,
  },
})
export default class App extends Vue {
  readonly data = <any[]>[];

  readonly cats = ['c1', 'c2', 'c3'];

  constructor() {
    super();
    const cats = this.cats;
    for (let i = 0; i < 100; ++i) {
      this.data.push({
        a: Math.random() * 10,
        d: 'Row ' + i,
        cat: cats[Math.floor(Math.random() * 3)],
        cat2: cats[Math.floor(Math.random() * 3)]
      });
    }
  }
}
</script>

<style>
</style>
