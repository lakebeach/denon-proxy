import { AppleTvIcon } from "../icons/AppleTvIcon";
import { SourceIcon } from "../icons/SourceIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";
import { useDenon } from "../../api/DenonClient";

export function AppleTvButton(props) {
  return <SourceButton {...props} source="MPLAY" Icon={AppleTvIcon} color="black" />
}

export function MainSourceButton(props) {
  return <SourceButton {...props} source="SOURCE" Icon={SourceIcon} color="hotpink" />
}

export function SpotifyButton(props) {
  return <SourceButton {...props} source="NET" Icon={SpotifyIcon} color="1ED760" />
}

function SourceButton(props) {
  const [state, {send}] = useDenon();
  const isOn = () => (state[props.zone]?.source === props.source
    && state[props.zone]?.power === 'ON');
  const sendCommand = () => {
    const command = {
      zone: props.zone,
      parameter: 'source',
      value: props.source,
    };
    send(command);
  };

  return (
    <button
      {...props}
      type="button"
      class="flex items-center justify-center w-8 h-8 p-0 border-0 rounded-full"
      onClick={() => sendCommand()}
      disabled={isOn()}
    >
      <props.Icon class="w-full" style={{color: isOn() ? props.color : 'dimgray'}} />
    </button>
  )
}
