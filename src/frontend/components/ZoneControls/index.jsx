import { PowerButton } from "../PowerButton";
import { SourceSelector } from "../SourceSelector";
import { VolumeSlider } from "../VolumeSlider";

export function ZoneControls(props) {
  return (
    <article class="card gap-8">
      <label class="flex items-center justify-between w-full">
        <div class="text-lg text-slate-200">{`${props.label}:`}</div>
        <PowerButton zone={props.zone} />
      </label>
      <div class="flex items-center justify-between w-full gap-4">
        <SourceSelector zone={props.zone} />
        <VolumeSlider zone={props.zone} />
      </div>
    </article>
  );
}