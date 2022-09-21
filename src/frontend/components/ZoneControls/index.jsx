import { PowerButton } from "../PowerButton";
import { SourceSelector } from "../SourceSelector";
import { VolumeSlider } from "../VolumeSlider";

export function ZoneControls(props) {
  return (
    <article class="inline-flex flex-wrap flex-1 w-64 p-4 m-2 border-0 rounded-lg drop-shadow-lg bg-slate-800">
      <label class="flex items-center justify-between w-full p-2">
        <div class="text-slate-200">{`${props.label}:`}</div>
        <PowerButton zone={props.zone} />
      </label>
      <div class="flex items-center justify-between w-full h-20 p-2">
        <SourceSelector zone={props.zone} />
        <VolumeSlider zone={props.zone} />
      </div>
    </article>
  );
}