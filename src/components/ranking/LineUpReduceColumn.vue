<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IBuilderAdapterReduceColumnProps, IReduceBuilder,
} from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';
import LineUpColumn from './LineUpColumn.vue';

@Component
export default class LineUpWeightedColumn extends ALineUpColumnBuilder implements IBuilderAdapterReduceColumnProps {
  @Prop({
    type: String,
    default: 'max',
  })
  public type!: 'min' | 'max' | 'mean' | 'median';

  @Prop({
    type: String,
    default: undefined,
  })
  public label?: string;

  public build(): IReduceBuilder {
    const children: LineUpColumn[] = this.$children.filter((d) => d.$options!.name === 'LineUpColumn') as any;
    return builderAdapter.buildReduceRanking(noUndefined(this), children.map((d) => d.build()));
  }
}
</script>
