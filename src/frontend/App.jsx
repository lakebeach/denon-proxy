import { PageHeader } from './components/PageHeader';
import { ZoneControls } from './components/ZoneControls';

function App() {
  return (
    <>
      <PageHeader />
      <main class="flex flex-wrap p-2">
        <ZoneControls label="Vardagsrummet" zone="M" />
        <ZoneControls label="Köket" zone="2" />
        {/* <ZoneControls label="Zon3" zone="3" /> */}
      </main>
    </>
  );
}

export default App;
