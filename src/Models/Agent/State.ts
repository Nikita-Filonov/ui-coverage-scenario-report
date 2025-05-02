import { ThemeMode } from '../Core/Theme';
import { AgentSettings } from './Settings';
import { AgentElementCoverage, AgentElementHighlight } from './Element';
import { ScenarioCoverage } from '../Coverage/State';

export interface AgentState {
  type?: string;
  settings?: AgentSettings;
  elements?: AgentElementCoverage[];
  scenarios?: ScenarioCoverage[];
  themeMode?: ThemeMode;
  elementHighlight?: AgentElementHighlight | null;
}
