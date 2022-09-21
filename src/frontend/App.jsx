import { AnimatedBackground } from './components/AnimatedBackground';
import { PageHeader } from './components/PageHeader';
import { ZoneControls } from './components/ZoneControls';

function App() {
  return (
    <>
      <AnimatedBackground />
      <PageHeader />
      <main class="flex flex-wrap p-4 gap-4">
        <ZoneControls label="Vardagsrummet" zone="M" />
        <ZoneControls label="Köket" zone="2" />
        {/* <ZoneControls label="Zon3" zone="3" /> */}
      </main>
    </>
  );
}

export default App;
