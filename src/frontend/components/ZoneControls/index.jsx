import { PowerButton } from "../PowerButton";
import { SourceSelector } from "../SourceSelector";
import { VolumeSlider } from "../VolumeSlider";
import styles from "./index.module.css";

export function ZoneControls(props) {
  return (
    <label class={styles.label}>
      <div>{`${props.label}:`}</div>
      <SourceSelector zone={props.zone} />
      <PowerButton zone={props.zone} />
      <VolumeSlider zone={props.zone} />
    </label>
  );
}