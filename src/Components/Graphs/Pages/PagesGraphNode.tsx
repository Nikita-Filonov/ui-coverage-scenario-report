import { Handle, Node, NodeProps, Position } from '@xyflow/react';
import { PageCoverageNode } from '../../../Models/Coverage/State';
import { Box, Paper, useTheme } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Fragment, useMemo } from 'react';
import { TitleView } from '../../Views/TitleView';
import { grey } from '@mui/material/colors';

type Props = Node<Pick<PageCoverageNode, 'url' | 'page'> & { selected: boolean }>;

export const PagesGraphNode = ({ data }: NodeProps<Props>) => {
  const { palette, typography } = useTheme();

  const selectedBackground = useMemo(
    () => (palette.mode === 'light' ? palette.grey['300'] : palette.grey['800']),
    [palette.mode, palette.grey]
  );

  return (
    <Paper
      sx={{
        p: 1,
        border: `1px solid ${grey['700']}`,
        background: data.selected ? selectedBackground : palette.background.paper,
        borderRadius: 1
      }}>
      <Box display={'flex'} flexDirection={'column'}>
        <TitleView
          icon={<DescriptionOutlinedIcon sx={{ mr: 0.5, fontSize: typography.body2.fontSize }} />}
          title={
            <Fragment>
              <strong>Page:</strong> {data.page}
            </Fragment>
          }
          titleVariant={'caption'}
        />
        <TitleView
          icon={<LinkIcon sx={{ mr: 0.5, fontSize: typography.body2.fontSize }} />}
          title={
            <Fragment>
              <strong>URL:</strong> {data.url}
            </Fragment>
          }
          titleVariant={'caption'}
        />
      </Box>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Paper>
  );
};
