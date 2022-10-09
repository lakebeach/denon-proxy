import { AppleTvIcon } from "../icons/AppleTvIcon";
import { Button } from "../Button";
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
  return <SourceButton {...props} source="NET" Icon={SpotifyIcon} color="#1ED760" />
}

function SourceButton(props) {
  const [state, {send}] = useDenon();
  const isSelected = () => state[props.zone]?.source === props.source;
  const sendCommand = () => {
    const command = {
      zone: props.zone,
      parameter: 'source',
      value: props.source,
    };
    send(command);
  };

  return (
    <Button {...props} style={{color: isSelected() ? props.color : null}} onClick={() => sendCommand()}>
      <props.Icon class="w-full" />
    </Button>
  )
}
