export const paramsToId = (paramId: string) => {
  const param = paramId.split("-");
  return Number(param[param.length - 1]);
};

export const paramsToName = (paramId: string) => {
  const param = paramId.split("-");
  param.pop()
  return param.join(' ');
}
