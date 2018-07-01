<template>
  <LineUp v-bind:data="data"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LINEUP_COMPONENTS } from './components';

@Component({
  components: LINEUP_COMPONENTS,
})
export default class App extends Vue {
  public readonly data = [] as any[];

  public readonly cats = ['c1', 'c2', 'c3'];

  constructor() {
    super();
    const cats = this.cats;
    for (let i = 0; i < 100; ++i) {
      this.data.push({
        a: Math.random() * 10,
        d: 'Row ' + i,
        cat: cats[Math.floor(Math.random() * 3)],
        cat2: cats[Math.floor(Math.random() * 3)],
      });
    }
  }
}
</script>

<style>
</style>
