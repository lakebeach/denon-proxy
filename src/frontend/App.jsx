import { ZoneControls } from './components/ZoneControls';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        A solid dashboard
      </header>
      <main>
        <ZoneControls label="Vardagsrummet" zone="M" />
        <ZoneControls label="Köket" zone="2" />
        {/* <ZoneControls label="Zon3" zone="3" /> */}
      </main>
    </div>
  );
}

export default App;
