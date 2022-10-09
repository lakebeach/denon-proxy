export function power({zone, value}) {
  const val = parseValue(value, zone);
  if (zone === 'A') {
    return `PW${val}`;
  }
  return `Z${zone}${value}`;
}

function parseValue(value, zone) {
  switch (typeof value) {
    case 'string': {
      if (zone === 'A') {
        if (value === 'OFF') {
          return 'STANDBY';
        }
      } else if (/^ON|OFF/.test(value)) {
        return value;
      }
      break;
    }

    case 'boolean': {
      if (zone === 'A') {
        return value ? 'ON' : 'STANDBY';
      }
      return value ? 'ON' : 'OFF';
    }
    
    case 'number': {
      return value ? 'ON' : 'OFF';
    }
    
    default:
      break;
  }
  return '?';
}
