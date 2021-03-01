<template>
  <span></span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { builderAdapter, IBuilderAdapterColumnDescProps, IColumnDesc } from 'lineupjs';
import { noUndefined } from '../utils';

@Component
export default class LineUpColumnDesc extends Vue implements IBuilderAdapterColumnDescProps {
  @Prop({
    type: String,
    required: true,
  })
  public column!: string;

  @Prop({
    type: Boolean,
    default: undefined,
  })
  public asMap?: boolean;

  @Prop({
    type: [Array, Number, Boolean],
    default: undefined,
  })
  public asArray?: string[] | number | boolean;

  @Prop({
    type: Object,
    default: undefined,
  })
  public custom?: { [key: string]: any };

  /**
   * label of the column
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public label?: string;

  /**
   * the column type
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public type?: string;

  /**
   * column description
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public description?: string;

  /**
   * color of this column
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public color?: string;

  /**
   * frozen column
   * @default isSupportType
   */
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public frozen?: boolean;

  /**
   * whether the column can be removed or not
   * @default false
   */
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public fixed?: boolean;

  /**
   * default renderer to use
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public renderer?: string;

  /**
   * default group renderer to use
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public groupRenderer?: string;

  /**
   * default summary renderer to use
   */
  @Prop({
    type: String,
    default: undefined,
  })
  public summaryRenderer?: string;

  /**
   * initial width of the column
   * @default 100 or 200 for strings
   */
  @Prop({
    type: Number,
    default: undefined,
  })
  public width?: number;

  /**
   * is this column visible by default
   * @default true
   */
  @Prop({
    type: Boolean,
    default: true,
  })
  public visible!: boolean;

  public build(data: any[]): IColumnDesc {
    return builderAdapter.build(noUndefined(this));
  }
}
</script>
