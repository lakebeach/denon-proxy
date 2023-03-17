import { parseVolume } from '../helpers.js';

export function volume({command, value}) {
  return {
    zone: 'M',
    parameter: parseCommand(command),
    value: parseVolume(value)
  };
}

function parseCommand(command) {
  if(command === 'MVMAX') {
    return 'maxvolume';
  }
  if(command === 'MVMIN') {
    return 'minvolume';
  }
  return 'volume';
}
