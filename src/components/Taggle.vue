<template>
  <div class="lu-wrapper" ref="main">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import LineUp from 'LineUp.vue';
import { Taggle as TaggleImpl, LocalDataProvider, ITaggleOptions} from 'lineupjs';

@Component
export default class Taggle extends LineUp {
  
  protected createInstance(node: HTMLElement, data: LocalDataProvider, options: Partial<ITaggleOptions>) {
    return new TaggleImpl(node, data, options);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* TODO */
</style>
