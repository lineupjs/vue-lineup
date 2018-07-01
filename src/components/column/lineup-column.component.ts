import { Component, Input, forwardRef } from '@angular/core';
import {
  builderAdapter,
  EAdvancedSortMethod,
  IBuilderAdapterCategoricalColumnDescProps,
  IBuilderAdapterColumnDescProps,
  IBuilderAdapterDateColumnDescProps,
  IBuilderAdapterHierarchyColumnDescProps,
  IBuilderAdapterNumberColumnDescProps,
  IBuilderAdapterStringColumnDescProps,
  IBuilderAdapterActionsColumnDescProps,
  ICategoricalColumnDesc,
  ICategory,
  IColumnDesc,
  IDateColumnDesc,
  IHierarchyColumnDesc,
  INumberColumnDesc,
  IPartialCategoryNode,
  IStringColumnDesc,
  IActionColumnDesc,
  IAction,
  IGroupAction
} from 'lineupjs';


@Component({
  selector: 'lineup-column-desc',
  template: ''
})
export class LineUpColumnDescComponent implements IBuilderAdapterColumnDescProps {
  @Input()
  column = '';
  @Input()
  asMap?: boolean;
  @Input()
  asArray?: string[] | number | boolean;
  @Input()
  custom?: {[key: string]: any};

  /**
   * label of the column
   */
  @Input()
  label?: string;
  /**
   * the column type
   */
  @Input()
  type?: string;

  /**
   * column description
   */
  @Input()
  description?: string;

  /**
   * color of this column
   */
  @Input()
  color?: string;

  /**
   * frozen column
   * @default isSupportType
   */
  @Input()
  frozen?: boolean;

  /**
   * whether the column can be removed or not
   * @default false
   */
  @Input()
  fixed?: boolean;

  /**
   * default renderer to use
   */
  @Input()
  renderer?: string;

  /**
   * default group renderer to use
   */
  @Input()
  groupRenderer?: string;

  /**
   * default summary renderer to use
   */
  @Input()
  summaryRenderer?: string;

  /**
   * initial width of the column
   * @default 100 or 200 for strings
   */
  @Input()
  width?: number;

  /**
   * is this column visible by default
   * @default true
   */
  @Input()
  visible = true;

  build(_data: any[]): IColumnDesc {
    return builderAdapter.build(this);
  }
}

// see https://stackoverflow.com/questions/36063627/angular2-and-class-inheritance-support
@Component({
  selector: 'lineup-categorical-column-desc',
  template: '',
  providers: [{provide: LineUpColumnDescComponent, useExisting: forwardRef(() => LineUpCategoricalColumnDescComponent) }]
})
export class LineUpCategoricalColumnDescComponent extends LineUpColumnDescComponent implements IBuilderAdapterCategoricalColumnDescProps {
  @Input()
  asOrdinal?: boolean;
  @Input()
  categories?: (string | Partial<ICategory>)[];
  @Input()
  missingCategory?: (string | Partial<ICategory>);
  @Input()
  asSet?: boolean | string;

  build(data: any[]): ICategoricalColumnDesc {
    return builderAdapter.buildCategorical(this, data);
  }
}


@Component({
  selector: 'lineup-date-column-desc',
  template: '',
  providers: [{provide: LineUpColumnDescComponent, useExisting: forwardRef(() => LineUpDateColumnDescComponent) }]
})
export class LineUpDateColumnDescComponent extends LineUpColumnDescComponent implements IBuilderAdapterDateColumnDescProps {
  @Input()
  dateFormat?: string;
  @Input()
  dateParse?: string;

  build(): IDateColumnDesc {
    return builderAdapter.buildDate(this);
  }
}


@Component({
  selector: 'lineup-hierarchy-column-desc',
  template: '',
  providers: [{provide: LineUpColumnDescComponent, useExisting: forwardRef(() => LineUpHierarchyColumnDescComponent) }]
})
export class LineUpHierarchyColumnDescComponent extends LineUpColumnDescComponent implements IBuilderAdapterHierarchyColumnDescProps {
  @Input()
  hierarchy: IPartialCategoryNode = {
    name: '',
    children: []
  };

  @Input()
  hierarchySeparator?: string;

  build(): IHierarchyColumnDesc {
    return builderAdapter.buildHierarchy(this);
  }
}


@Component({
  selector: 'lineup-number-column-desc',
  template: '',
  providers: [{provide: LineUpColumnDescComponent, useExisting: forwardRef(() => LineUpNumberColumnDescComponent) }]
})
export class LineUpNumberColumnDescComponent extends LineUpColumnDescComponent implements IBuilderAdapterNumberColumnDescProps {
  @Input()
  domain?: [number, number];
  @Input()
  range?: [number, number];
  @Input()
  mapping?: 'linear' | 'sqrt' | 'pow1.1' | 'pow2' | 'pow3';
  @Input()
  scripted?: string;
  @Input()
  sort?: EAdvancedSortMethod;

  build(data: any[]): INumberColumnDesc {
    return builderAdapter.buildNumber(this, data);
  }
}


@Component({
  selector: 'lineup-string-column-desc',
  template: '',
  providers: [{provide: LineUpColumnDescComponent, useExisting: forwardRef(() => LineUpStringColumnDescComponent) }]
})
export class LineUpStringColumnDescComponent extends LineUpColumnDescComponent implements IBuilderAdapterStringColumnDescProps {
  @Input()
  editable?: boolean;
  @Input()
  html?: boolean;
  @Input()
  pattern?: string;
  @Input()
  patternTemplates?: string[];

  build(): IStringColumnDesc {
    return builderAdapter.buildString(this);
  }
}


@Component({
  selector: 'lineup-actions-column-desc',
  template: '',
  providers: [{provide: LineUpColumnDescComponent, useExisting: forwardRef(() => LineUpActionsColumnDescComponent) }]
})
export class LineUpActionsColumnDescComponent extends LineUpColumnDescComponent implements IBuilderAdapterActionsColumnDescProps {
  @Input()
  actions?: IAction[];
  @Input()
  groupActions?: IGroupAction[];

  build(): IActionColumnDesc {
    return builderAdapter.buildActions(this);
  }
}
