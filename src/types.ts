export interface Dimensions {
  width: number;
  height: number;
}

export type Item<T> = T & { id: React.Key };

export type ItemProps<T> = { data: Item<T>; width?: number };

export interface Values {
  rowGap: number;
  /**
   * The number of columns to show
   */
  columns: number;
  masonry: boolean;
  columnGap: number;
  /**
   * Height of the grid item in pixels (defaults to 'auto')
   */
  itemHeight?: number;
}
