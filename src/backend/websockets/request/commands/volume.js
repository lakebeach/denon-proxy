export function volume({zone, value}) {
  const val = parseValue(value, zone);
  if (zone === 'M') {
    return `MV${val}`;
  }
  return `Z${zone}${val}`;
}

function parseValue(value/*, zone*/) {
  switch (typeof value) {
    case 'string': {
      return value;
    }
    
    case 'number': {
      const parts = `${value}`.split('.');
      const str = parts[0].padStart(2, '0') + (parts[1] ||  '');
      return str;
    }
    
    default:
      return '';
  }
}
