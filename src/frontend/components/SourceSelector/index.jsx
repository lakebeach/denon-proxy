import { onMount } from "solid-js";
import { useDenon } from "../../api/DenonClient";
import { AppleTvButton, MainSourceButton, SpotifyButton } from "../SourceButtons";
// import { sourcelist } from "./sourcelist";
// import styles from "./index.module.css";

export function SourceSelector(props) {
  const [state, {send}] = useDenon();
  const value = () => state[props.zone]?.source;
  const sources = getSources(props.zone);
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
    <ul class="flex list-none gap-4">
      {sources.map(Source => (
        <li>
          <Source zone={props.zone} />
        </li>
      ))}
    </ul>
  );

  function getSources(zone) {
    const sources = [AppleTvButton, SpotifyButton];
    if(zone !== 'M') {
      sources.push(MainSourceButton);
    }
    return sources;
  }
  
  // return (
  //   <select
  //     //classList={{ [styles.slider]: true, [`${props.class}`]: !!props.class }}
  //     value={value()}
  //     onChange={(e) => { sendCommand(e.target.value); }}
  //   >
  //     <option value="">-- välj källa --</option>
  //     <For each={Object.entries(sourcelist)}>
  //       {([value, text]) => (
  //         <option value={value}>{text}</option>
  //       )}
  //     </For>
  //   </select>
  // );
}
