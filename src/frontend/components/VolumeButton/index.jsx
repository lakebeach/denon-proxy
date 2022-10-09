import { Button } from "../Button";
import { VolumeIcon } from "../icons/VolumeIcon";
import { useDenon } from "../../api/DenonClient";

function VolumeButton(props) {
  const [, {send}] = useDenon();
  const sendCommand = () => {
    const command = {
      zone: props.zone,
      parameter: 'volume',
      value: props.type
    };
    send(command);
  };

  return (
    <Button class="text-slate-200" {...props} onClick={() => sendCommand()}>
      <VolumeIcon class="w-full" type={props.type} />
    </Button>
  )
}

export function VolumeDownButton(props) {
  return <VolumeButton {...props} type="DOWN" />;
}

export function VolumeUpButton(props) {
  return <VolumeButton {...props} type="UP" />;
}