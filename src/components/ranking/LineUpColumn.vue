<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';

@Component
export default class LineUpColumn extends ALineUpColumnBuilder {
  @Prop({
    type: String,
    default: '*',
  })
  public column!: '*' | string;

  public build() {
    return builderAdapter.buildGeneric(noUndefined(this));
  }
}
</script>
