<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  builderAdapter,
  IBuilderAdapterImposeColumnProps,
  IBuilderAdapterNestedColumnProps,
  IBuilderAdapterRankingProps,
  IBuilderAdapterReduceColumnProps,
  IBuilderAdapterScriptColumnProps,
  IBuilderAdapterSupportColumnProps,
  IBuilderAdapterWeightedSumColumnProps,
  IImposeColumnBuilder,
  INestedBuilder,
  IReduceBuilder,
  IScriptedBuilder,
  IWeightedSumBuilder,
  LocalDataProvider,
  Ranking,
} from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';

@Component
export default class LineUpRanking extends Vue implements IBuilderAdapterRankingProps {
  @Prop({
    type: [String, Object, Array],
    default: undefined,
  })
  public sortBy?:
    | (string | { column: string; asc: 'asc' | 'desc' | boolean })
    | Array<string | { column: string; asc: 'asc' | 'desc' | boolean }>;

  @Prop({
    type: [String, Array],
    default: undefined,
  })
  public groupBy?: string[] | string;

  @Prop({
    type: Array,
    default: undefined,
  })
  public columns?: Array<
    string | IImposeColumnBuilder | INestedBuilder | IWeightedSumBuilder | IReduceBuilder | IScriptedBuilder
  >;

  public merge() {
    const children: ALineUpColumnBuilder[] = this.$children.filter((d) => d.$options!.name!.endsWith('Column')) as any;
    const inline = children.map((d) => d.build());

    const columns = (this.columns || []).concat(inline);

    const r: IBuilderAdapterRankingProps = { columns };
    if (this.sortBy) {
      r.sortBy = this.sortBy;
    }
    if (this.groupBy) {
      r.groupBy = this.groupBy;
    }
    return r;
  }

  /*
   * build the column description
   */
  public build(data: LocalDataProvider): Ranking {
    return builderAdapter.buildRanking(noUndefined(this), data);
  }
}
</script>
