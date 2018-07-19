export const createStack = (children) => {
  const stack = {};
  Object.assign(stack, ...children);
  return stack;
};

export const createChild = (routeName, screen) => {
  const child = {};
  child[routeName] = { screen };
  return child;
};
