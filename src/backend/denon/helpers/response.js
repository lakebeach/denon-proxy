const commands = {
  power: /^(PW)(ON|STANDBY)/,
  volume: /^(MV(?:MAX|MIN|)\s*)([0-9]{2}5?)/,
  mute: /^(MU)(ON|OFF)/,
  input: /^(SI)(.+)/,
  info: /^(NSE)(.*)/,
  main: /^(ZM)(ON|OFF)/,
  video: /^(SV)(ON|OFF)/,
  restorer: /^(PSRSTR\s*)(ON|OFF)/,
  zone: /^(Z[23M](?:MU|CS|CV|HPF|PS|MAX|MIN|)\s*)(.+)/,
};

export function parse(data) {
  if(typeof data !== 'string') {
    throw new Error('invalid data');
  }
  let parsedData;
  for (const cmd in commands) {
    const match = data.match(commands[cmd]);
    if (match) {
      parsedData = {
        match,
        command: match[1].trim(),
        value: match[2].trim(),
        type: cmd
      };
      break;
    }
  }
  if (!parsedData) {
    throw new Error(`unable to parse data: ${data}`);
  }
  if (parsedData.type === 'info') {
    const rows = {};
    const row = parsedData.match.input.trim().split(/\r/);
    for (let i = 0, len = row.length; i < len; i++) {
      const parts = row[i].match(/^NSE([0-9])(.*)/);
      if (parts && parts[1] && parts[2]) {
        rows[parts[1]] = parts[2].toString().trim();
      }
    }
    parsedData.value = rows;
  }
  return parsedData;
}