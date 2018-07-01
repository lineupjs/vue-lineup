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

  // @ContentChildren(LineUpColumnComponent)
  private readonly columns: LineUpColumn[] = [];

  public build(): IReduceBuilder {
    return builderAdapter.buildReduceRanking(noUndefined(this), this.columns.map((d) => d.build()));
  }
}
</script>
