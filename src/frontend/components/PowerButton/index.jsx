import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";
import { PowerIcon } from "../icons/PowerIcon";

export function PowerButton(props) {
  const [state, {send}] = useDenon();
  const isOn = () => state[props.zone]?.power === 'ON';
  const sendCommand = (value) => {
    const command = {
      zone: props.zone,
      parameter: 'power',
      value
    };
    send(command);
  };

  onMount(() => { sendCommand('?'); });

  return (
    <button    
      type="button"
      class="flex items-center justify-center w-8 h-8 p-0 border-0 rounded-full"
      onClick={() => sendCommand(isOn() ? 'OFF': 'ON')}
    >
      <PowerIcon class="w-full" style={{fill: isOn() ? 'green' : 'red'}} />
    </button>
  )
}