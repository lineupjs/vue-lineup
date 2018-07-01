<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, IDateColumnDesc, IBuilderAdapterDateColumnDescProps,
} from 'lineupjs';
import LineUpColumnDesc from './LineUpColumnDesc.vue';
import { noUndefined } from '../utils';

@Component
export default class LineUpDateColumnDesc extends LineUpColumnDesc implements IBuilderAdapterDateColumnDescProps {
  @Prop({
    type: String,
    default: undefined,
  })
  public dateFormat?: string;

  @Prop({
    type: String,
    default: undefined,
  })
  public dateParse?: string;

  public build(): IDateColumnDesc {
    return builderAdapter.buildDate(noUndefined(this));
  }
}
</script>
