import Typography from '@mui/material/Typography';
import { FC, ReactNode } from 'react';
import { Badge, Box, Divider, Grid2, Paper, styled, SxProps, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { getActionMarginRight } from '../../Services/Views';

type WidgetAction = {
  icon?: ReactNode;
  content?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  badgeContent?: ReactNode;
};

type WidgetViewProps = {
  sx?: SxProps<Theme>;
  title?: string | ReactNode;
  actions?: WidgetAction[];
  children?: ReactNode;
  childrenSx?: SxProps<Theme>;
};

const TitleContainer = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 1,
  position: 'sticky',
  paddingLeft: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: 'background.paper'
}));

export const WidgetView: FC<WidgetViewProps> = (props) => {
  const { sx, title, actions, children, childrenSx } = props;

  const getMarginRight = (index: number): number => getActionMarginRight({ index, actions, margin: 1 });

  return (
    <Paper sx={{ py: 2, px: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', ...sx }}>
      <TitleContainer>
        <Grid2 container sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid2 sx={{ flexGrow: 1 }}>{title && <Typography variant={'h6'}>{title}</Typography>}</Grid2>
          {actions?.map((action, index) => (
            <Grid2 key={index}>
              {action.icon ? (
                <IconButton
                  key={index}
                  sx={{ mr: getMarginRight(index) }}
                  size={'small'}
                  onClick={action.onClick}
                  disabled={action.disabled}>
                  <Badge badgeContent={action.badgeContent} color="primary">
                    {action.icon}
                  </Badge>
                </IconButton>
              ) : (
                <Box key={index} sx={{ mr: getMarginRight(index) }}>
                  {action.content}
                </Box>
              )}
            </Grid2>
          ))}
        </Grid2>
      </TitleContainer>
      <Divider sx={{ mx: 1 }} />
      <Box sx={{ px: 1, pb: 1, flexGrow: 1, overflow: 'auto', ...childrenSx }}>{children}</Box>
    </Paper>
  );
};
