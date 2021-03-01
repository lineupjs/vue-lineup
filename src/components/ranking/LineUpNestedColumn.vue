<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter, IBuilderAdapterNestedColumnProps, INestedBuilder } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';
import LineUpColumn from './LineUpColumn.vue';

@Component
export default class LineUpNestedColumn extends ALineUpColumnBuilder implements IBuilderAdapterNestedColumnProps {
  @Prop({
    type: String,
    default: undefined,
  })
  public label?: string;

  public build(): INestedBuilder {
    const children: LineUpColumn[] = this.$children.filter((d) => d.$options!.name === 'LineUpColumn') as any;
    return builderAdapter.buildNestedRanking(
      noUndefined(this),
      children.map((d) => d.build())
    );
  }
}
</script>
