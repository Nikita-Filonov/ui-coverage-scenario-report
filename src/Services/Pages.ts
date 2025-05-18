import { PageCoverageEdge, PageCoverageNode } from '../Models/Coverage/State';
import { Edge, MarkerType, Node } from '@xyflow/react';
import { GraphSettings } from '../Models/Graph/Settings';
import { grey } from '@mui/material/colors';

type GetPageCoverageNodesProps = {
  nodes: PageCoverageNode[];
  settings: GraphSettings;
  selectedNode: PageCoverageNode | null;
};

type GetPageCoverageEdgesProps = {
  edges: PageCoverageEdge[];
  selectedEdge: PageCoverageEdge | null;
};

export const getPageCoverageNodes = ({ nodes, settings, selectedNode }: GetPageCoverageNodesProps): Node[] => {
  const priorityMap = new Map<number, PageCoverageNode[]>();
  for (const node of nodes) {
    if (!priorityMap.has(node.priority)) {
      priorityMap.set(node.priority, []);
    }
    priorityMap.get(node.priority)!.push(node);
  }

  const graphNodes: Node[] = [];
  for (const [priority, nodesWithSamePriority] of priorityMap.entries()) {
    for (const [index, node] of nodesWithSamePriority.entries()) {
      graphNodes.push({
        id: node.page,
        type: 'page',
        data: { url: node.url, page: node.page, selected: node.page === selectedNode?.page },
        position: {
          x: index * settings.xSpacing,
          y: priority * settings.ySpacing
        },
        draggable: true
      });
    }
  }

  return graphNodes;
};

export const getPageCoverageEdgeId = (edge: PageCoverageEdge | null): string => {
  return edge ? `${edge.fromPage} -> ${edge.toPage}` : '';
};

export const getPageCoverageEdges = ({ edges, selectedEdge }: GetPageCoverageEdgesProps): Edge[] => {
  return edges.map((edge) => ({
    id: getPageCoverageEdgeId(edge),
    type: 'default',
    label: `×${edge.count}`,
    style: { strokeWidth: 1.5 },
    source: edge.fromPage,
    target: edge.toPage,
    selected: getPageCoverageEdgeId(edge) === getPageCoverageEdgeId(selectedEdge),
    markerEnd: { type: MarkerType.ArrowClosed },
    labelStyle: { fontWeight: 500 },
    labelBgStyle: { stroke: grey['500'], strokeWidth: 1 },
    labelBgPadding: [4, 2]
  }));
};
