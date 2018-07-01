import LineUp from './LineUp.vue';
import Taggle from './Taggle.vue';
import { LineUpAllColumns, LineUpColumn, LineUpImposeColumn, LineUpNestedColumn,
  LineUpRanking, LineUpReduceColumn, LineUpScriptedColumn,
  LineUpSupportColumn, LineUpWeightedColumn, LineUpWeightedSumColumn,
} from './ranking';

export * from './ranking';
export {default as LineUp} from './LineUp.vue';
export {default as Taggle} from './Taggle.vue';

export const LINEUP_COMPONENTS = {
  LineUp, Taggle,
  LineUpAllColumns, LineUpColumn, LineUpImposeColumn, LineUpNestedColumn,
  LineUpRanking, LineUpReduceColumn, LineUpScriptedColumn,
  LineUpSupportColumn, LineUpWeightedColumn, LineUpWeightedSumColumn,
};
