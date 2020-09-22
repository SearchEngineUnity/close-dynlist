/* eslint-disable import/prefer-default-export */
export const removeEmpty = (obj) =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => v !== null)
      .map(([k, v]) => (typeof v === 'object' ? [k, removeEmpty(v)] : [k, v]))
      .filter(([k, v]) => Object.keys(v).length !== 0),
  );
