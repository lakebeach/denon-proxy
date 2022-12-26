import { MuteButton } from "../MuteButton";
import { VolumeDownButton, VolumeUpButton } from "../VolumeButton";
import { VolumeSlider } from "../VolumeSlider";

export function VolumeControls(props) {
  return (
    <div class="flex items-center justify-between w-full gap-4">
      <MuteButton zone={props.zone} />
      <VolumeDownButton zone={props.zone} />
      <VolumeSlider zone={props.zone} logical={props.logical} />
      <VolumeUpButton zone={props.zone} />
    </div>
  );
}