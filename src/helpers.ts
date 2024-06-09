export const paramsToId = (paramId: string) => {
  const param = paramId.split("-");
  return Number(param[param.length - 1]);
};
