
export function noUndefined(obj: any) {
  const r: any = {};
  Object.getOwnPropertyNames(obj).forEach((key) => {
    if (key.startsWith('$')) {
      return;
    }
    const v = obj[key];
    if (v !== undefined) {
      r[key] = v;
    }
  });
  return r;
}
