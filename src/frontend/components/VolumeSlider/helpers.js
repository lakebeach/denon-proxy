export function round(precision, value) {
  const inverse = 1/precision;
  return Math.round(value*inverse)/inverse;
}

export const gainedMin = 100;
export const gainedMax = 150;

const minVal = 0;
const minPos = Math.log(gainedMin);
const maxPos = Math.log(gainedMax);

function getScale(maxValue) {
  return (maxPos-minPos) / (maxValue()-minVal);
}

export function getPosition(value, maxValue, logical, trim) {
  if(!logical) {
    return value();
  }
  const scale = getScale(maxValue);
  const pos = Math.exp(minPos + scale*(value()-minVal));
  return Number.isFinite(pos) ? trim(pos) : undefined;
}

export function getValue(position, maxValue, logical, trim) {
  const pos = Number(position)
  if(!logical || Number.isNaN(pos)) {
    return position;
  }
  const scale = getScale(maxValue);
  const val = (Math.log(pos)-minPos)/scale + minVal;
  return Number.isFinite(val) ? trim(val) : undefined;
}