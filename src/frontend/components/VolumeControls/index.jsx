import { VolumeSlider } from "../VolumeSlider";

export function VolumeControls(props) {
  return (
    <div class="flex items-center justify-between w-full gap-4">
      <VolumeSlider zone={props.zone} />
    </div>
  );
}