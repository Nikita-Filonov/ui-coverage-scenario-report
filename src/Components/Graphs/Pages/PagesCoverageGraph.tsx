import { BaseGraph } from '../BaseGraph';
import { Edge, Node } from '@xyflow/react';
import { useInitialState } from '../../../Providers/Core/InitialStateProvider';
import { useMemo } from 'react';
import { getPageCoverageEdgeId, getPageCoverageEdges, getPageCoverageNodes } from '../../../Services/Pages';
import { usePagesSettings } from '../../../Providers/Pages/PagesSettingsProvider';
import { usePagesControls } from '../../../Providers/Pages/PagesControlsProvider';
import { EmptyView } from '../../Views/EmptyView';

export const PagesCoverageGraph = () => {
  const { state } = useInitialState();
  const { settings } = usePagesSettings();
  const { node, edge, setNode, setEdge } = usePagesControls();

  const nodes: Node[] = useMemo(
    () => getPageCoverageNodes({ nodes: state.pages.nodes, settings: settings.graph, selectedNode: node }),
    [node, settings.graph, state.pages.nodes]
  );

  const edges: Edge[] = useMemo(
    () => getPageCoverageEdges({ edges: state.pages.edges, selectedEdge: edge }),
    [edge, state.pages.edges]
  );

  const onNode = (input: Node) => {
    const node = state.pages.nodes.find((n) => n.page === input.id);
    if (node) {
      setEdge(null);
      setNode(node);
    }
  };

  const onEdge = (input: Edge) => {
    const edge = state.pages.edges.find((e) => getPageCoverageEdgeId(e) === input.id);
    if (edge) {
      setNode(null);
      setEdge(edge);
    }
  };

  if (nodes.length === 0) {
    return <EmptyView title={'No pages available'} description={'There are no pages to display in the graph'} />;
  }

  return (
    <BaseGraph
      sx={{ mt: 2 }}
      nodes={nodes}
      edges={edges}
      background={settings.graph.background}
      onNodeClick={onNode}
      onEdgeClick={onEdge}
    />
  );
};
