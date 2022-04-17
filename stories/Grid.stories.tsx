import React from 'react';
import { Meta } from '@storybook/react';
import { Grid, GridProps } from '../src';
import Card from '../example/Card';


const meta: Meta = {
  title: 'Grid',
  component: Grid,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template = <T,>(args: GridProps<T>) => (
  <>
    <style>
      {` 
    * { box-sizing: border-box; }
    body { margin: 0; }
    .container { height: 100vh; padding: 100px; }
`}
    </style>
    <div className="container">
      <Grid {...args} />
    </div>
  </>
);

export const Default = Template.bind({});

Default.args = {
  data: [...Array(1000)].map((_, i) => ({ id: i + 1 })),
  item: Card,
  columns: 8,
  masonry: false,
  rowGap: 20,
  columnGap: 10,
  itemHeight: 200,
};
