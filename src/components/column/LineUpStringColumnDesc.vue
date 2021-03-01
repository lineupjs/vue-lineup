<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { builderAdapter, ILinkColumnDesc, IBuilderAdapterStringColumnDescProps } from 'lineupjs';
import LineUpColumnDesc from './LineUpColumnDesc.vue';
import { noUndefined } from '../utils';

@Component
export default class LineUpStringColumnDesc extends LineUpColumnDesc implements IBuilderAdapterStringColumnDescProps {
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public editable?: boolean;

  @Prop({
    type: Boolean,
    default: undefined,
  })
  public html?: boolean;

  @Prop({
    type: String,
    default: undefined,
  })
  public pattern?: string;

  @Prop({
    type: Array,
    default: undefined,
  })
  public patternTemplates?: string[];

  public build(): ILinkColumnDesc {
    return builderAdapter.buildString(noUndefined(this));
  }
}
</script>
