import { BasePaper } from '../Views/BasePaper';
import { Box, IconButton, SxProps, Theme, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { getActionMarginRight } from '../../Services/Views';
import { Variant } from '@mui/material/styles/createTypography';
import { ToolbarBadge } from '../Badges/ToolbarBadge';

type ToolbarAction = {
  icon?: ReactNode;
  content?: ReactNode;
  onClick?: () => void;
  badgeContent?: ReactNode;
};

export type BaseToolbarViewProps = {
  icon?: ReactNode;
  title: string;
  actions?: ToolbarAction[];
  titleSx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
  titleVariant?: Variant;
};

export const BaseToolbarView: FC<BaseToolbarViewProps> = (props) => {
  const { icon, title, actions = [], titleSx, containerSx, titleVariant = 'h6' } = props;

  const getMarginRight = (index: number): number => getActionMarginRight({ index, actions, margin: 2 });

  return (
    <BasePaper sx={containerSx}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {icon && <Box sx={{ mr: 2 }}>{icon}</Box>}
        <Typography sx={titleSx} variant={titleVariant}>
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {actions.map((action, index) =>
          action.icon ? (
            <IconButton key={index} sx={{ mr: getMarginRight(index) }} size={'small'} onClick={action.onClick}>
              <ToolbarBadge badgeContent={action.badgeContent} color="primary">
                {action.icon}
              </ToolbarBadge>
            </IconButton>
          ) : (
            <Box key={index} sx={{ mr: getMarginRight(index) }}>
              {action.content}
            </Box>
          )
        )}
      </Box>
    </BasePaper>
  );
};
