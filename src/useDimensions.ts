import React from 'react';
import { debounce, getDimensions } from './utils';
import type { Dimensions } from './types';

const useDimensions = <N extends HTMLElement>() => {
  const [node, setNode] = React.useState<N | null>(null);
  const [dimensions, setDimensions] = React.useState<Dimensions | null>(null);

  const ref = React.useCallback((node: N) => setNode(node), []);

  React.useLayoutEffect(() => {
    setDimensions(getDimensions(node));

    /**
     * TODO: find reliable alternative
     * This is to make sure that the dimensions are updated when the component is fully loaded
     */
    setTimeout(() => setDimensions(getDimensions(node)), 100);

    const handleResize = debounce(() => setDimensions(getDimensions(node)));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [node]);

  return { ref, node, dimensions };
};

export default useDimensions;
