import { LINEUP_COMPONENTS } from './components';
export * from './components';

/**
 * install module a Vue plugin
 * @param Vue
 */
export function install(Vue: { component(id: string, comp: any): void }) {
  const root = LINEUP_COMPONENTS as any;
  Object.keys(root).forEach((key: string) => {
    Vue.component(key, root[key]);
  });
}
