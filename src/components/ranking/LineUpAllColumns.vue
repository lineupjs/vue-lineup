<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';
import { noUndefined } from '../utils';

@Component
export default class LineUpAllColumns extends ALineUpColumnBuilder {
  public build() {
    return builderAdapter.buildAllColumnsRanking();
  }
}
</script>
