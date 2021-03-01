<template>
  <div class="lu-wrapper">
    <div ref="main"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import {
  builderAdapter,
  Column,
  IBuilderAdapterProps,
  ICellRendererFactory,
  IDynamicHeight,
  IGroupData,
  IGroupItem,
  IToolbarAction,
  LineUp as LineUpImpl,
  Taggle,
  ILineUpOptions,
  LocalDataProvider,
  ITaggleOptions,
  Ranking,
} from 'lineupjs';
import { noUndefined } from './utils';
import { LineUpColumnDesc } from './column';
import { LineUpRanking } from './ranking';

@Component
export default class LineUp extends Vue implements IBuilderAdapterProps {
  @Prop({
    type: Array,
    required: true,
  })
  public data!: any[];

  @Prop({
    type: Array,
    default: undefined,
  })
  public selection?: number[];
  @Prop({
    type: Number,
    default: undefined,
  })
  public highlight?: number;

  @Prop({
    type: Boolean,
    default: undefined,
  })
  public singleSelection?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public filterGlobally?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public noCriteriaLimits?: boolean;
  @Prop({
    type: Number,
    default: undefined,
  })
  public maxGroupColumns?: number;
  @Prop({
    type: Number,
    default: undefined,
  })
  public maxNestedSortingCriteria?: number;

  @Prop()
  public columnTypes?: { [type: string]: typeof Column };

  @Prop({
    type: [Boolean, Array],
    default: undefined,
  })
  public deriveColumns?: boolean | string[];
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public deriveColors?: boolean;

  @Prop()
  public restore?: any;
  @Prop({
    type: [Boolean, String],
    default: undefined,
  })
  public defaultRanking?: boolean | 'noSupportTypes';

  @Prop({
    type: Boolean,
    default: undefined,
  })
  public animated?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public sidePanel?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public sidePanelCollapsed?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public hierarchyIndicator?: boolean;
  @Prop({
    type: String,
    default: undefined,
  })
  public defaultSlopeGraphMode?: 'item' | 'band';
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public summaryHeader?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public expandLineOnHover?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public overviewMode?: boolean;
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public labelRotation?: number;

  @Prop({
    type: Object as () => { [id: string]: ICellRendererFactory },
    default: () => ({}),
  })
  public renderer?: { [id: string]: ICellRendererFactory };
  @Prop({
    type: Object as () => { [id: string]: IToolbarAction },
    default: () => ({}),
  })
  public toolbar?: { [id: string]: IToolbarAction };

  @Prop({
    type: Number,
    default: undefined,
  })
  public rowHeight?: number;
  @Prop({
    type: Number,
    default: undefined,
  })
  public rowPadding?: number;

  @Prop({
    type: Number,
    default: undefined,
  })
  public groupHeight?: number;
  @Prop({
    type: Number,
    default: undefined,
  })
  public groupPadding?: number;

  @Prop({
    type: Function,
    default: undefined,
  })
  public dynamicHeight?: (data: Array<IGroupItem | IGroupData>, ranking: Ranking) => IDynamicHeight | null;

  @Prop({
    type: Boolean,
    default: undefined,
  })
  public ignoreUnsupportedBrowser?: boolean;

  private changed = new Set<keyof IBuilderAdapterProps>();

  private readonly adapter = new builderAdapter.Adapter({
    props: () => noUndefined(this),
    createInstance: (data: LocalDataProvider, options: Partial<ILineUpOptions>) =>
      this.createInstance(this.$refs.main as HTMLElement, data, options),
    columnDescs: (data: any[]) =>
      this.$children
        .filter((d) => d.$options!.name!.endsWith('ColumnDesc'))
        .map((d) => (d as LineUpColumnDesc).build(data)),
    rankingBuilders: () =>
      this.$children.filter((d) => d.$options!.name === 'LineUpRanking').map((d) => (d as LineUpRanking).merge()),
  });

  @Emit('selectionChanged')
  public onSelectionChanged(selection: number[]) {
    //
  }

  @Emit('highlightChanged')
  public onHighlightChanged(highlight: number) {
    //
  }

  public created() {
    // watch all properties
    const props = Object.keys((this as any)._props) as Array<keyof IBuilderAdapterProps>;
    for (const prop of props) {
      this.$watch(prop, () => {
        this.changed.add(prop);
        this.$forceUpdate(); // force an update since we just have a dummy template
      });
    }
  }

  public mounted() {
    this.adapter.componentDidMount();
  }

  public updated() {
    if (this.changed.size > 0) {
      this.adapter.componentDidUpdate((d) => this.changed.has(d));
      this.changed.clear();
    }
  }

  public destroyed() {
    this.adapter.componentWillUnmount();
  }

  protected createInstance(
    node: HTMLElement,
    data: LocalDataProvider,
    options: Partial<ITaggleOptions>
  ): LineUpImpl | Taggle {
    return new LineUpImpl(node, data, options);
  }
}

function all(this: LineUp) {
  return this.highlight;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../node_modules/lineupjs/build/LineUpJS.css"></style>
<style scoped>
.lu-wrapper {
  position: relative;
  display: block;
  width: 100%;
  height: 500px;
}

.lu {
  position: absolute !important;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
