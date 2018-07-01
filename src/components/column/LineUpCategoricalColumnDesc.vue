<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import {
  builderAdapter, ICategoricalColumnDesc, IBuilderAdapterCategoricalColumnDescProps, ICategory,
} from 'lineupjs';
import LineUpColumnDesc from './LineUpColumnDesc.vue';
import { noUndefined } from '../utils';

@Component
export default class LineUpCategoricalColumnDesc extends LineUpColumnDesc
                implements IBuilderAdapterCategoricalColumnDescProps {
  @Prop({
    type: Boolean,
    default: undefined,
  })
  public asOrdinal?: boolean;

  @Prop({
    type: Array,
    default: undefined,
  })
  public categories?: (string | Partial<ICategory>)[];

  @Prop({
    type: [String, Object],
    default: undefined,
  })
  public missingCategory?: (string | Partial<ICategory>);

  @Prop({
    type: [Boolean, String],
    default: undefined,
  })
  public asSet?: boolean | string;

  public build(data: any[]): ICategoricalColumnDesc {
    return builderAdapter.buildCategorical(noUndefined(this), data);
  }
}
</script>
