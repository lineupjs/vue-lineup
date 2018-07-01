<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IBuilderAdapterNestedColumnProps, INestedBuilder,
} from 'lineupjs';
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

  // @ContentChildren(LineUpColumnComponent)
  private readonly columns: LineUpColumn[] = [];

  public build(): INestedBuilder {
    return builderAdapter.buildNestedRanking(noUndefined(this), this.columns.map((d) => d.build()));
  }
}
</script>
