import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";

export function VolumeSlider(props) {
  const [state, {send}] = useDenon();
  const isOn = () => state[props.zone]?.power === 'ON';
  const value = () => state[props.zone]?.volume;
  const maxValue = () => state[props.zone]?.maxvolume || 70;
  const sendCommand = (value) => {
    const command = {
      zone: props.zone,
      parameter: 'volume',
      value
    };
    send(command);
  };

  onMount(() => { sendCommand('?'); });

  return (
    <input
      type="range"
      class="flex-auto min-w-[150px]"
      min="0"
      max={maxValue()}
      step={props.zone !== 'M' ? '1' : '0.5'}
      value={value()}
      onChange={(e) => { sendCommand(e.target.value); }}
      disabled={!isOn()}
    />
  );
}
