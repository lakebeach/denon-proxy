import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";
import { gainedMax, gainedMin, getPosition, getValue, round } from "./helpers";

export function VolumeSlider(props) {
  const [state, {send}] = useDenon();  
  // eslint-disable-next-line solid/reactivity
  const step = props.zone !== 'M' ? 1 : 0.5;
  const r = round.bind(null, step);
  const isOn = () => state[props.zone]?.power === 'ON';
  const value = () => state[props.zone]?.volume;
  const maxValue = () => state[props.zone]?.maxvolume || 70;
  const min = () => props.logical ? gainedMin : 0;
  const max = () => props.logical ? gainedMax : maxValue();
  const position = () => getPosition(value, maxValue, props.logical, r);
  const sendCommand = (pos) => {
    const command = {
      zone: props.zone,
      parameter: 'volume',
      value: getValue(pos, maxValue, props.logical, r)
    };    
    send(command);
  };

  onMount(() => { sendCommand('?'); });

  return (
    <input
      type="range"
      class="flex-auto min-w-[150px]"
      min={min()}
      max={max()}
      step={step}
      value={position()}
      onChange={(e) => { sendCommand(e.target.value); }}
      disabled={!isOn()}
    />
  );
}
