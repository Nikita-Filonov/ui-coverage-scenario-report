import { Paper } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type Props = { sx?: SxProps<Theme> } & PropsWithChildren;

export const BasePaper: FC<Props> = ({ children, sx }) => {
  return <Paper sx={{ p: 2, ...sx }}>{children}</Paper>;
};
