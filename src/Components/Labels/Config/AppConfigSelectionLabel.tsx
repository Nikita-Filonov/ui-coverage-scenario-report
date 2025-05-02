import { FC, MouseEvent } from 'react';
import { BaseLabel } from '../BaseLabel';
import CodeIcon from '@mui/icons-material/Code';
import { useInitialState } from '../../../Providers/Core/InitialStateProvider';

type Props = {
  onSelectAppConfig: (event: MouseEvent<HTMLDivElement>) => void;
};

export const AppConfigSelectionLabel: FC<Props> = ({ onSelectAppConfig }) => {
  const { config } = useInitialState();

  return (
    <BaseLabel
      icon={<CodeIcon />}
      color={config.key ? 'success' : 'warning'}
      label={config.key ? config.name : 'App not selected'}
      onClick={onSelectAppConfig}
    />
  );
};
