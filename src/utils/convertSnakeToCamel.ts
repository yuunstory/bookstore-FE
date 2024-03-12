import camelCaseKeys from 'camelcase-keys';

export const convertToCamelCase = (data: any) => {
  return camelCaseKeys(data, { deep: true });
};
