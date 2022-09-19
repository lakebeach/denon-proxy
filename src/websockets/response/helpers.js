export function parseVolume(str) {
  let val = str.length === 3 ? 0.5 : 0;
  val += Number(str.substring(0,2));
  return val;
}
