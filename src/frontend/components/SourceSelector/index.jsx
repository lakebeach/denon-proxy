import { For, onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";
import { sourcelist } from "./sourcelist";
// import styles from "./index.module.css";

export function SourceSelector(props) {
  const [state, {send}] = useDenon();
  const value = () => state[props.zone]?.source;
  const sendCommand = (value) => {
    const command = {
      zone: props.zone,
      parameter: 'source',
      value
    };
    send(command);
  };

  onMount(() => { sendCommand('?'); });

  return (
    <select
      //classList={{ [styles.slider]: true, [`${props.class}`]: !!props.class }}
      value={value()}
      onChange={(e) => { sendCommand(e.target.value); }}
    >
      <option value="">-- välj källa --</option>
      <For each={Object.entries(sourcelist)}>
        {([value, text]) => (
          <option value={value}>{text}</option>
        )}
      </For>
    </select>
  );
}
