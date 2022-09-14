const commands = {
  power: /^(PW)(ON|STANDBY|\?)/,
  volume: /^(MV)([0-9]{2}5?|UP|DOWN|\?)/, // 00-98 with half steps in between
  mute: /^(MU)(ON|OFF|\?)/,
  input: /^(SI)(PHONO|CD|TUNER|DVD|BD|TV|SAT\/CBL|MPLAY|GAME|AUX[12]|NET|SPOTIFY|\?)/,
  main: /^(ZM)(ON|OFF|\?)/,
  zone: /^(Z[23](?:MU|CS|CV|HPF|PS|))(.+)/,
};

export function parse(input) {
  if(typeof input !== 'string') {
    throw new Error('invalid input');
  }
  let parsedInput;
  for (const cmd in commands) {
    const match = input.match(commands[cmd]);
    if (match) {
      parsedInput = {
        parameters: match[2],
        command: match[1],
        name: cmd
      };
      break;
    }
  }
  if (!parsedInput) {
    throw new Error('unable to parse input');
  }
  return `${parsedInput.command}${parsedInput.parameters ?? ''}\r`;
}