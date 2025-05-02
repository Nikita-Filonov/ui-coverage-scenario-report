import { Badge } from '@mui/material';
import { AgentBadgeContentType, AgentSettings } from '../../../Models/Agent/Settings';
import { FC, useMemo } from 'react';
import { AgentElementCoverage } from '../../../Models/Agent/Element';

type Props = {
  element: AgentElementCoverage;
  settings?: AgentSettings;
};

export const AgentElementCoverageBadge: FC<Props> = ({ element, settings }) => {
  const content = useMemo(() => {
    switch (settings?.badgeContentType) {
      case AgentBadgeContentType.TotalNumberOfActions:
        return element.actions.reduce((total, action) => total + action.count, 0);
      case AgentBadgeContentType.TotalNumberOfScenarios:
        return element.scenarios.length;
      case AgentBadgeContentType.TotalNumberOfActionTypes:
        return element.actions.length;
      default:
        return 0;
    }
  }, [element, settings?.badgeContentType]);

  return <Badge color={settings?.badgeColor} badgeContent={content} />;
};
