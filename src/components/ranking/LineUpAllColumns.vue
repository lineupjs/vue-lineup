<template>
  <span></span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { builderAdapter } from 'lineupjs';
import { ALineUpColumnBuilder } from './ALineUpColumnBuilder';

@Component
export default class LineUpAllColumns extends ALineUpColumnBuilder {
  public build() {
    return builderAdapter.buildAllColumnsRanking();
  }
}
</script>
