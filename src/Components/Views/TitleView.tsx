import { Box, Typography } from '@mui/material';
import { FC, MouseEvent, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';
import { CopyButton } from '../Buttons/CopyButton';

type Props = {
  sx?: SxProps<Theme>;
  icon?: ReactNode;
  title: ReactNode;
  value?: string;
  action?: ReactNode;
  allowCopy?: boolean;
};

export const TitleView: FC<Props> = (props) => {
  const { sx, icon, title, value, action, allowCopy } = props;

  const onCopy = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!value) return;

    event.stopPropagation();
    await navigator.clipboard.writeText(value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      {icon}
      <Typography>{title}</Typography>
      <Box sx={{ flexGrow: 1 }} />
      {action}
      {allowCopy && <CopyButton sx={{ ml: 1 }} onCopy={onCopy} />}
    </Box>
  );
};
