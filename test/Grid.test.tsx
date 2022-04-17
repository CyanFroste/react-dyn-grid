import React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from '../src';
import Card from '../example/Card';

const props = {
  data: [...Array(1000)].map((_, i) => ({ id: i + 1 })),
  item: Card,
  columns: 8,
  masonry: false,
  rowGap: 20,
  columnGap: 10,
  itemHeight: 200,
};

describe('Grid', () => {
  it('renders the grid', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grid {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
