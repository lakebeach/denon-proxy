import { Button } from "../Button";
import { MuteIcon } from "../icons/MuteIcon";
import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";

export function MuteButton(props) {
  const [state, {send}] = useDenon();
  const isMuted = () => state[props.zone]?.mute === 'ON';
  const sendCommand = (value) => {
    const command = {
      zone: props.zone,
      parameter: 'mute',
      value
    };
    send(command);
  };

  onMount(() => { sendCommand('?'); });

  return (
    <Button {...props} style={{color: isMuted() ? 'red' : null}} onClick={() => sendCommand(isMuted() ? 'OFF': 'ON')}>
      <MuteIcon class="w-full" />
    </Button>
  );
}