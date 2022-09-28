import { PowerButton } from "../PowerButton";
import { SourceSelector } from "../SourceSelector";
import { VolumeControls } from "../VolumeControls";

export function ZoneControls(props) {
  return (
    <article class="card gap-8">
      <label class="flex items-center justify-between w-full">
        <div class="text-lg text-slate-200">{`${props.label}:`}</div>
        <PowerButton zone={props.zone} />
      </label>
      <SourceSelector zone={props.zone} />
      <VolumeControls zone={props.zone} />
    </article>
  );
}