import '@xyflow/react/dist/style.css';
import { FC } from 'react';
import { Box, styled, useTheme } from '@mui/material';
import { Background, Controls, Edge, Node, ReactFlow, ReactFlowProvider } from '@xyflow/react';
import { PagesGraphNode } from './Pages/PagesGraphNode';
import { grey } from '@mui/material/colors';
import { SxProps, Theme } from '@mui/system';
import { GraphBackground } from '../../Models/Graph/Settings';
import { MAP_GRAPH_BACKGROUND } from '../../Services/Graph';

type Props = {
  sx?: SxProps<Theme>;
  nodes: Node[];
  edges: Edge[];
  background: GraphBackground;
  onEdgeClick: (edge: Edge) => void;
  onNodeClick: (node: Node) => void;
};

const GraphContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 520,
  border: `1px solid ${grey[500]}`,
  borderRadius: theme.spacing(0.5)
}));

const InternalGraph: FC<Props> = (props) => {
  const { sx, nodes, edges, background, onEdgeClick, onNodeClick } = props;
  const { palette } = useTheme();

  return (
    <GraphContainer sx={sx}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView={true}
        nodeTypes={{ page: PagesGraphNode }}
        className={palette.mode}
        onEdgeClick={(_, edge) => onEdgeClick(edge)}
        onNodeClick={(_, node) => onNodeClick(node)}>
        <Controls />
        <Background variant={MAP_GRAPH_BACKGROUND[background]} gap={12} size={1} />
      </ReactFlow>
    </GraphContainer>
  );
};

export const BaseGraph: FC<Props> = (props) => {
  return (
    <ReactFlowProvider>
      <InternalGraph {...props} />
    </ReactFlowProvider>
  );
};
