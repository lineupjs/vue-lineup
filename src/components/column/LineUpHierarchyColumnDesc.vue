<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IPartialCategoryNode, IHierarchyColumnDesc, IBuilderAdapterHierarchyColumnDescProps,
} from 'lineupjs';
import LineUpColumnDesc from './LineUpColumnDesc.vue';
import { noUndefined } from '../utils';

@Component
export default class LineUpHierarchyColumnDesc extends LineUpColumnDesc
                implements IBuilderAdapterHierarchyColumnDescProps {
  @Prop({
    type: Object,
    required: true,
  })
  public hierarchy!: IPartialCategoryNode;

  @Prop({
    type: String,
    default: undefined,
  })
  public hierarchySeparator?: string;

  public build(): IHierarchyColumnDesc {
    return builderAdapter.buildHierarchy(noUndefined(this));
  }
}
</script>
