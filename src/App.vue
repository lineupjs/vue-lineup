<template>
  <LineUp v-bind:data="data" />
  <!--<LineUp v-bind:data="data" defaultRanking="true" style="height: 800px" @highlightChanged="highlightChanged" v-bind:highlight="highlight">
    <LineUpStringColumnDesc column="d" label="Label" v-bind:width="100" />
    <LineUpCategoricalColumnDesc column="cat" v-bind:categories="cats" color="green" />
    <LineUpCategoricalColumnDesc column="cat2" v-bind:categories="cats" color="blue" />
    <LineUpNumberColumnDesc column="a" v-bind:domain="[0, 10]" color="blue" />
    <LineUpRanking groupBy="cat" sortBy="a:desc">
      <LineUpSupportColumn type="*" />
      <LineUpColumn column="*" />
    </LineUpRanking>
  </LineUp>-->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LINEUP_COMPONENTS } from './components';

@Component({
  components: LINEUP_COMPONENTS,
})
export default class App extends Vue {
  public data = [] as any[];

  public readonly cats = ['c1', 'c2', 'c3'];

  public highlight = -1;

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

  public mounted() {
    const that = this; // this vs that since classes are just a intermediate proxy
    setTimeout(() => {
      const cats = this.cats;
      const data = [];
      for (let i = 0; i < 1000; ++i) {
        data.push({
          a: Math.random() * 10,
          d: 'Row ' + i,
          cat: cats[Math.floor(Math.random() * 3)],
          cat2: cats[Math.floor(Math.random() * 3)],
        });
      }
      that.data = data;
      // console.log('updated data');
    }, 5000);
  }

  public highlightChanged(highlight: number) {
    this.highlight = highlight;
  }
}
</script>

<style></style>
