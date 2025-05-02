import { styled, Tooltip as LibTooltip } from '@mui/material';
import { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { FC, ReactElement, ReactNode } from 'react';

type Props = {
  open?: boolean;
  title: ReactNode;
  children: ReactElement;
};

const Tooltip = styled(({ className, children, ...props }: TooltipProps) => (
  <LibTooltip {...props} classes={{ popper: className }}>
    {children}
  </LibTooltip>
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none'
  }
});

export const BaseTooltip: FC<Props> = ({ open, title, children }) => {
  return (
    <Tooltip
      sx={{
        [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: 'none'
        }
      }}
      open={open}
      title={title}
      arrow
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'zIndex',
              enabled: true,
              phase: 'write',
              fn: ({ state }) => {
                state.elements.popper.style.zIndex = '1800';
              }
            }
          ]
        }
      }}>
      {children}
    </Tooltip>
  );
};
