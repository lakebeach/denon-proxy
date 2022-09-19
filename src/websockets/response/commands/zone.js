import { parseVolume } from "../helpers.js";

export function zone({command, value}) {
  return {
    zone: parseZone(command),
    parameter: parseCommand(command, value),
    value: parseValue(value, command)
  };
}

function parseZone(command) {
  return command[1];
}

function parseCommand(command, value) {
  if (/^Z[2|3]MAX/.test(command)) {
    return 'maxvolume';
  }
  if (/^Z[2|3]MIN/.test(command)) {
    return 'minvolume';
  }
  if (/^Z[2|3]$/.test(command)) {
    if(Number.isNaN(Number(value))) {
      return /^ON|OFF$/.test(value)
        ? 'power'
        : 'source';      
    }
    return 'volume';
  }
  if (/^Z[2|3]MU/.test(command)) {
    return 'mute';
  }
}

function parseValue(value, command) {
  if (/^Z[2|3]$/.test(command) && !Number.isNaN(Number(value))) {
    return parseVolume(value);
  }
  return value;
}