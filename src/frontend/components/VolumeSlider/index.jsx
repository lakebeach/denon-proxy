import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";
import styles from "./index.module.css";

export function VolumeSlider(props) {
  const [state, {send}] = useDenon();
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
      classList={{ [styles.slider]: true, [`${props.class}`]: !!props.class }}
      min="0"
      max={maxValue()}
      step="0.5"
      value={value()}
      onChange={(e) => { sendCommand(e.target.value); }}
    ></input>
  );
}
