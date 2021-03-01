<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter,
  IBuilderAdapterActionsColumnDescProps,
  IActionColumnDesc,
  IAction,
  IGroupAction,
} from 'lineupjs';
import LineUpColumnDesc from './LineUpColumnDesc.vue';
import { noUndefined } from '../utils';

@Component
export default class LineUpActionsColumnDesc extends LineUpColumnDesc implements IBuilderAdapterActionsColumnDescProps {
  @Prop({
    type: Array,
    default: undefined,
  })
  public actions?: IAction[];

  @Prop({
    type: Array,
    default: undefined,
  })
  public groupActions?: IGroupAction[];

  public build(): IActionColumnDesc {
    return builderAdapter.buildActions(noUndefined(this));
  }
}
</script>
