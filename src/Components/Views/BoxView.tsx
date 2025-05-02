import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { Grid2, SxProps, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { getActionMarginRight } from '../../Services/Views';
import { ToolbarBadge } from '../Badges/ToolbarBadge';

type BoxAction = {
  icon?: ReactNode;
  onClick?: () => void;
  badgeContent?: ReactNode;
};

type BoxViewProps = {
  title?: string;
  actions?: BoxAction[];
  containerSx?: SxProps<Theme>;
} & PropsWithChildren;

export const BoxView: FC<BoxViewProps> = ({ title, actions, children, containerSx }) => {
  const getMarginRight = (index: number): number => getActionMarginRight({ index, actions, margin: 1 });

  return (
    <Box sx={{ mt: 3, ...containerSx }}>
      <Grid2 container sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid2 sx={{ flexGrow: 1 }}>{title && <Typography fontWeight={'bold'}>{title}</Typography>}</Grid2>
        {actions?.map((action, index) => (
          <Grid2 key={index}>
            <IconButton key={index} sx={{ mr: getMarginRight(index) }} size={'small'} onClick={action.onClick}>
              <ToolbarBadge badgeContent={action.badgeContent} color="primary">
                {action.icon}
              </ToolbarBadge>
            </IconButton>
          </Grid2>
        ))}
      </Grid2>
      {children}
    </Box>
  );
};
