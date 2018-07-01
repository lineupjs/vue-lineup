
export function noUndefined(obj: any) {
  const r: any = {};
  Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertyNames(obj.__proto__)).forEach((key) => {
    if (key.startsWith('$') || key.startsWith('_')) {
      return;
    }
    const v = obj[key];
    if (v !== undefined) {
      r[key] = v;
    }
  });
  return r;
}
