<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';

@Component
export default class LineUpWeightedColumn extends ALineUpColumnBuilder {
  @Prop({
    type: String,
    required: true,
  })
  public column!: string;

  @Prop({
    type: Number,
    default: 1,
  })
  public weight!: number;

  public build() {
    return this.column;
  }
}
</script>
