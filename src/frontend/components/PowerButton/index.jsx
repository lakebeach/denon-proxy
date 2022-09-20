import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";
import { PowerIcon } from "../icons/PowerIcon";
import styles from "./index.module.css";

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
      classList={{ [styles.button]: true, [`${props.class}`]: !!props.class }}
      onClick={() => sendCommand(isOn() ? 'OFF': 'ON')}
    >
      <PowerIcon class={styles.icon} on={isOn()} />
    </button>
  )
}