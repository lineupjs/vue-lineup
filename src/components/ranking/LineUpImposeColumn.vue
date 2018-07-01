<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IBuilderAdapterImposeColumnProps,
} from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';

@Component
export default class LineUpImposeColumn extends ALineUpColumnBuilder implements IBuilderAdapterImposeColumnProps {
  @Prop({
    type: String,
    default: undefined,
  })
  public label?: string;

  @Prop({
    type: String,
    required: true,
  })
  public column!: string;

  @Prop({
    type: String,
    required: true,
  })
  public categoricalColumn!: string;

  public build() {
    return builderAdapter.buildImposeRanking(noUndefined(this));
  }
}
</script>
