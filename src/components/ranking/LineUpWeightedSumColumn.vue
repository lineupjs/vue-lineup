<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter, IBuilderAdapterWeightedSumColumnProps, IWeightedSumBuilder } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';
import LineUpWeightedColumn from './LineUpWeightedColumn.vue';

@Component
export default class LineUpWeightedSumColumn
  extends ALineUpColumnBuilder
  implements IBuilderAdapterWeightedSumColumnProps {
  @Prop({
    type: String,
    default: undefined,
  })
  public label?: string;

  public build(): IWeightedSumBuilder {
    const children: LineUpWeightedColumn[] = this.$children.filter((d) => {
      return d.$options!.name === 'LineUpWeightedColumn';
    }) as any;
    return builderAdapter.buildWeightedSumRanking(
      noUndefined(this),
      children.map((d) => ({
        weight: d.weight,
        column: d.build(),
      }))
    );
  }
}
</script>
