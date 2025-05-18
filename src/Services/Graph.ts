import { BackgroundVariant } from '@xyflow/react';
import { GraphBackground, GraphSettings } from '../Models/Graph/Settings';

export const MAP_GRAPH_BACKGROUND: Record<GraphBackground, BackgroundVariant> = {
  [GraphBackground.Dots]: BackgroundVariant.Dots,
  [GraphBackground.Lines]: BackgroundVariant.Lines,
  [GraphBackground.Cross]: BackgroundVariant.Cross
};

export const DEFAULT_GRAPH_SETTINGS: GraphSettings = {
  xSpacing: 200,
  ySpacing: 200,
  background: GraphBackground.Dots
};
