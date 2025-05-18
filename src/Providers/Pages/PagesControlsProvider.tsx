import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { PageCoverageEdge, PageCoverageNode } from '../../Models/Coverage/State';

export type PagesControlsContextProps = {
  node: PageCoverageNode | null;
  setNode: (node: PageCoverageNode | null) => void;
  edge: PageCoverageEdge | null;
  setEdge: (edge: PageCoverageEdge | null) => void;
};

const PagesControlsContext = createContext<PagesControlsContextProps | null>(null);

const PagesControlsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [node, setNode] = useState<PageCoverageNode | null>(null);
  const [edge, setEdge] = useState<PageCoverageEdge | null>(null);

  return (
    <PagesControlsContext.Provider value={{ node, setNode, edge, setEdge }}>{children}</PagesControlsContext.Provider>
  );
};

const usePagesControls = () => {
  const event = useContext(PagesControlsContext);
  if (event == null) {
    throw new Error('usePagesControls() called outside of a PagesControlsProvider?');
  }
  return event;
};

export { PagesControlsProvider, usePagesControls };
