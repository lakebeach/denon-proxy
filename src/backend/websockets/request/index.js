import * as commands from './commands/index.js'

export function parse(message) {  
  const data = parseMessage(message);
  const command = (commands[data.parameter] || commands.noop)(data);
  return command;
}

function parseMessage(message) {
  const str = message.toString();
  const obj = JSON.parse(str);
  return { ...obj, zone: parseZone(obj.zone), parameter: parseParameter(obj.parameter)};
}

function parseZone(param) {
  return `${param}`.toUpperCase();
}

function parseParameter(param) {
  return param.toLowerCase();
}
