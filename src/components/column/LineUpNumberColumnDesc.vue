<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IBuilderAdapterNumberColumnDescProps, EAdvancedSortMethod, INumberColumnDesc,
} from 'lineupjs';
import LineUpColumnDesc from './LineUpColumnDesc.vue';
import { noUndefined } from '../utils';

@Component
export default class LineUpNumberColumnDesc extends LineUpColumnDesc implements IBuilderAdapterNumberColumnDescProps {
  @Prop({
    type: Array,
    default: undefined,
  })
  public domain?: [number, number];

  @Prop({
    type: Array,
    default: undefined,
  })
  public range?: [number, number];

  @Prop({
    type: String,
    default: undefined,
  })
  public mapping?: 'linear' | 'sqrt' | 'pow1.1' | 'pow2' | 'pow3';

  @Prop({
    type: String,
    default: undefined,
  })
  public scripted?: string;

  @Prop({
    type: String,
    default: undefined,
  })
  public sort?: EAdvancedSortMethod;

  public build(data: any[]): INumberColumnDesc {
    return builderAdapter.buildNumber(noUndefined(this), data);
  }
}


</script>
