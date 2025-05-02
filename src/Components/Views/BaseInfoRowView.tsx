import Typography from '@mui/material/Typography';
import { FC, ReactNode, useMemo } from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';
import { CopyButton } from '../Buttons/CopyButton';

export type Props = {
  name: string;
  icon?: ReactNode;
  value?: ReactNode;
  allowCopy?: boolean;
  component?: ReactNode;
  containerSx?: SxProps<Theme>;
};

export const BaseInfoRowView: FC<Props> = (props) => {
  const { name, icon, value, allowCopy = true, component = false, containerSx } = props;

  const internalValue = useMemo(() => value || 'unknown', [value]);

  const onCopy = async () => {
    await navigator.clipboard.writeText(String(value));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...containerSx }}>
      {icon && <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>{icon}</Box>}
      <Typography sx={{ display: 'flex', alignItems: 'center', wordBreak: 'break-word', whiteSpace: 'normal' }}>
        {name}: {component ? component : internalValue}
      </Typography>
      {Boolean(value) && allowCopy && (
        <Box sx={{ display: 'flex' }}>
          <CopyButton sx={{ ml: 1 }} onCopy={onCopy} />
        </Box>
      )}
    </Box>
  );
};
