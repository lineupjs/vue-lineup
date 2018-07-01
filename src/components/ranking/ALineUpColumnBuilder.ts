import Vue from 'vue';
import {
  IImposeColumnBuilder,
  INestedBuilder,
  IReduceBuilder,
  IScriptedBuilder,
  IWeightedSumBuilder,
} from 'lineupjs';


export abstract class ALineUpColumnBuilder extends Vue {
  public abstract build(): (string | IImposeColumnBuilder | INestedBuilder |
                            IWeightedSumBuilder | IReduceBuilder | IScriptedBuilder);
}
