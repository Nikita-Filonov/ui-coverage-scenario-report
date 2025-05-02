import { useState } from 'react';
import { ScenarioCoverage } from '../../Models/Coverage/State';
import { ScenarioDetailsView } from './Details/ScenarioDetailsView';
import { ScenariosView } from './ScenariosView';

export const ScenariosLayoutView = () => {
  const [scenario, setScenario] = useState<ScenarioCoverage | null>(null);

  return scenario ? (
    <ScenarioDetailsView scenario={scenario} setScenario={setScenario} />
  ) : (
    <ScenariosView setScenario={setScenario} />
  );
};
