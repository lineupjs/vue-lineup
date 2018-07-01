<template>
  <div class="lu-wrapper" ref="main">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
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


@Component
export default class LineUp extends Vue implements IBuilderAdapterProps {
  @Prop({
    type: Array,
    required: true
  }) 
  data!: any[];

  @Prop(Array)
  selection: number[] | null = null;
  @Prop(Number)
  highlight: number | null = null;

  @Prop(Boolean)
  singleSelection?: boolean;
  @Prop(Boolean)
  filterGlobally?: boolean;
  @Prop(Boolean)
  noCriteriaLimits?: boolean;
  @Prop(Number)
  maxGroupColumns?: number;
  @Prop(Number)
  maxNestedSortingCriteria?: number;

  columnTypes?: {[type: string]: typeof Column};

  @Prop([Boolean, Array])
  deriveColumns?: boolean | string[];
  @Prop(Boolean)
  deriveColors?: boolean;

  @Prop()
  restore?: any;
  @Prop([Boolean, String])
  defaultRanking?: boolean | 'noSupportTypes';

  @Prop(Boolean)
  animated?: boolean;
  @Prop(Boolean)
  sidePanel?: boolean;
  @Prop(Boolean)
  sidePanelCollapsed?: boolean;
  @Prop(String)
  defaultSlopeGraphMode?: 'item' | 'band';
  @Prop(Boolean)
  summaryHeader?: boolean;
  @Prop(Boolean)
  expandLineOnHover?: boolean;
  @Prop(Boolean)
  overviewMode?: boolean;
  @Prop(Boolean)
  labelRotation?: number;

  @Prop(Object)
  renderer?: {[id: string]: ICellRendererFactory};
  @Prop(Object)
  toolbar?: {[id: string]: IToolbarAction};

  @Prop(Number)
  rowHeight?: number;
  @Prop(Number)
  rowPadding?: number;

  @Prop(Number)
  groupHeight?: number;
  @Prop(Number)
  groupPadding?: number;

  @Prop(Function)
  dynamicHeight?: (data: (IGroupItem | IGroupData)[], ranking: Ranking) => (IDynamicHeight | null);

  private readonly _adapter = new builderAdapter.Adapter({
    props: () => this,
    createInstance: (data: LocalDataProvider, options: Partial<ILineUpOptions>) =>
      this.createInstance(<HTMLElement>this.$refs.main, data, options),
    columnDescs: (data: any[]) => [], //this.descs.map((d) => d.build(data)),
    rankingBuilders: () => [], //this.rankings.map((d) => d.merge())
  });

  @Emit('selectionChanged')
  onSelectionChanged(selection: number[]) {
    this.selection = selection;
  }

  @Emit('highlightChanged')
  onHighlightChanged(highlight: number) {
    this.highlight = highlight;
  }

  protected createInstance(node: HTMLElement, data: LocalDataProvider, options: Partial<ITaggleOptions>): LineUpImpl | Taggle {
    return new LineUpImpl(node, data, options);
  }

  // ngAfterViewInit() {
  //   this._adapter.componentDidMount();
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //   const changed = new Set(Object.keys(changes).filter((d) => !changes[d].firstChange));
  //   if (changed.size > 0) {
  //     this._adapter.componentDidUpdate((prop) => changed.has(prop));
  //   }
  // }

  // ngOnDestroy() {
  //   this._adapter.componentWillUnmount();
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* TODO */
</style>
