<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IScriptedBuilder, IBuilderAdapterScriptColumnProps,
} from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';
import LineUpColumn from './LineUpColumn.vue';

@Component
export default class LineUpScriptedColumn extends ALineUpColumnBuilder implements IBuilderAdapterScriptColumnProps {
  @Prop({
    type: String,
    required: true,
  })
  public code!: string;

  @Prop({
    type: String,
    default: undefined,
  })
  public label?: string;

  public build(): IScriptedBuilder {
    const children: LineUpColumn[] = this.$children.filter((d) => d.$options!.name === 'LineUpColumn') as any;
    return builderAdapter.buildScriptRanking(noUndefined(this), children.map((d) => d.build()));
  }
}
</script>
