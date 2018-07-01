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
    required: true,
  })
  public data!: any[];

  @Prop(Array)
  public selection: number[] | null = null;
  @Prop(Number)
  public highlight: number | null = null;

  @Prop(Boolean)
  public singleSelection?: boolean;
  @Prop(Boolean)
  public filterGlobally?: boolean;
  @Prop(Boolean)
  public noCriteriaLimits?: boolean;
  @Prop(Number)
  public maxGroupColumns?: number;
  @Prop(Number)
  public maxNestedSortingCriteria?: number;

  @Prop()
  public columnTypes?: {[type: string]: typeof Column};

  @Prop([Boolean, Array])
  public deriveColumns?: boolean | string[];
  @Prop(Boolean)
  public deriveColors?: boolean;

  @Prop()
  public restore?: any;
  @Prop([Boolean, String])
  public defaultRanking?: boolean | 'noSupportTypes';

  @Prop(Boolean)
  public animated?: boolean;
  @Prop(Boolean)
  public sidePanel?: boolean;
  @Prop(Boolean)
  public sidePanelCollapsed?: boolean;
  @Prop(String)
  public defaultSlopeGraphMode?: 'item' | 'band';
  @Prop(Boolean)
  public summaryHeader?: boolean;
  @Prop(Boolean)
  public expandLineOnHover?: boolean;
  @Prop(Boolean)
  public overviewMode?: boolean;
  @Prop(Boolean)
  public labelRotation?: number;

  @Prop(Object)
  public renderer?: {[id: string]: ICellRendererFactory};
  @Prop(Object)
  public toolbar?: {[id: string]: IToolbarAction};

  @Prop(Number)
  public rowHeight?: number;
  @Prop(Number)
  public rowPadding?: number;

  @Prop(Number)
  public groupHeight?: number;
  @Prop(Number)
  public groupPadding?: number;

  @Prop(Function)
  public dynamicHeight?: (data: Array<IGroupItem | IGroupData>, ranking: Ranking) => (IDynamicHeight | null);

  private readonly adapter = new builderAdapter.Adapter({
    props: () => this,
    createInstance: (data: LocalDataProvider, options: Partial<ILineUpOptions>) =>
      this.createInstance(this.$refs.main as HTMLElement, data, options),
    columnDescs: (data: any[]) => [], // this.descs.map((d) => d.build(data)),
    rankingBuilders: () => [], // this.rankings.map((d) => d.merge())
  });

  @Emit('selectionChanged')
  public onSelectionChanged(selection: number[]) {
    //
  }

  @Emit('highlightChanged')
  public onHighlightChanged(highlight: number) {
    //
  }

  protected createInstance(node: HTMLElement, data: LocalDataProvider,
                           options: Partial<ITaggleOptions>): LineUpImpl | Taggle {
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
