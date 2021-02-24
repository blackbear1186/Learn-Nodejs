
export const getPropertyWithDefault = (propertyName, defaultValue, obj) => {
  return obj[propertyName] || defaultValue;
}

export const otherFunction = () => {
  return 5;
}