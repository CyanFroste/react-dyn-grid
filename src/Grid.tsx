import React from 'react';
import useDimensions from './useDimensions';
import type { Item, ItemProps, Values } from './types';
import styles from './styles';

export interface Props<T> extends Values {
  id?: string;
  className?: string;
  style?: React.CSSProperties;

  /**
   * The data to render (Should be an array of objects having an id property)
   */
  data: Item<T>[];
  /**
   * The component to render for each item
   */
  item: (props: ItemProps<T>) => React.ReactElement<Item<T>>;
}

const Grid = <T,>(props: Props<T>) => {
  const {
    id,
    className,
    style = {},
    data,
    item: Item,
    masonry,
    columns: n,
    rowGap,
    columnGap,
    itemHeight,
  } = props;

  const [itemWidth, setItemWidth] = React.useState(0);
  const { ref, dimensions } = useDimensions<HTMLDivElement>();

  React.useLayoutEffect(() => {
    if (!dimensions) return;
    setItemWidth((dimensions.width - columnGap * (n - 1)) / n);
  }, [dimensions, n, columnGap]);

  const columnify = React.useCallback(() => {
    if (!dimensions) return [];
    const columns: React.ReactElement<Item<T>>[][] = [];

    data.forEach((it, i) => {
      const item = <Item key={it.id} data={it} width={itemWidth} />;
      columns[i % n] ? columns[i % n].push(item) : (columns[i % n] = [item]);
    });

    return columns;
  }, [data, dimensions, n, columnGap]);

  return (
    <div
      id={id}
      className={className}
      style={{ ...styles.container, ...style }}
    >
      <div ref={ref}>
        {masonry ? (
          <div style={{ ...styles.masonry, columnGap }}>
            {columnify().map((column, i) => (
              <div
                key={i}
                style={{ ...styles.column, width: itemWidth, rowGap }}
              >
                {column}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              ...styles.normal,
              rowGap,
              columnGap,
              gridAutoRows: !itemHeight ? 'auto' : `${itemHeight}px`,
              gridTemplateColumns: `repeat(${n}, ${itemWidth}px)`,
            }}
          >
            {data.map(item => (
              <Item key={item.id} data={item} width={itemWidth} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Grid;
