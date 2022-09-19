import * as commands from './commands/index.js';

export function parse(command, value, type) {
  const response = (commands[type] || commands.noop)({command, value})
  return JSON.stringify(response);
}
