import * as commands from './commands/index.js';

export function parse(command, value, type) {
  const response = (commands[type] || commands.noop)({command, value})
  return JSON.stringify(response);
}

export function parseCache(cache) {
  const response = Object.entries(cache).reduce((state, [type, values]) => ([
    ...state,
    ...Object.entries(values).map(([command, value]) => (commands[type] || commands.noop)({command, value}))
  ]), []);
  return JSON.stringify(response);
}
