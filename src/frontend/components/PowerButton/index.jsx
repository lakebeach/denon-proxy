import { PowerIcon } from "../icons/PowerIcon";
import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";

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
      class="button-icon-only"
      onClick={() => sendCommand(isOn() ? 'OFF': 'ON')}
    >
      <PowerIcon class="w-full" style={{color: isOn() ? 'lime' : 'red'}} />
    </button>
  )
}