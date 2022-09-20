export function source({zone, value}) {
  const val = value || '?';
  if (zone === 'M') {
    return `SI${val}`;
  }
  return `Z${zone}${value}`;
}
