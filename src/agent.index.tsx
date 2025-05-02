import { watchFrameRoot } from './Services/Frame/Root';
import { AgentInitialStateProvider } from './Providers/Agent/AgentInitialStateProvider';
import { AgentElementsCoverageView } from './Views/Agent/Elements/AgentElementsCoverageView';
import { AgentThemeProvider } from './Providers/Agent/AgentThemeProvider';

const IndexAgent = () => {
  return (
    <AgentInitialStateProvider>
      <AgentThemeProvider>
        <AgentElementsCoverageView />
      </AgentThemeProvider>
    </AgentInitialStateProvider>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  watchFrameRoot(() => <IndexAgent />);
});
