export function mute({zone, value}) {
  const val = parseValue(value, zone);
  if (zone === 'A') {
    return `MU${val}`;
  }
  return `Z${zone}MU${value}`;
}

function parseValue(value/*, zone*/) {
  switch (typeof value) {
    case 'string': {
      if (/^ON|OFF/.test(value)) {
        return value;
      }
      break;
    }

    case 'boolean':
    case 'number': {
      return value ? 'ON' : 'OFF';
    }
    
    default:
      break;
  }
  return '?';
}
