<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter, IBuilderAdapterSupportColumnProps } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';

@Component
export default class LineUpSupportColumn extends ALineUpColumnBuilder implements IBuilderAdapterSupportColumnProps {
  @Prop({
    type: String,
    default: '*',
  })
  public type!: 'rank' | 'selection' | 'group' | 'aggregate' | '*';

  public build() {
    return builderAdapter.buildSupportRanking(noUndefined(this));
  }
}
</script>
