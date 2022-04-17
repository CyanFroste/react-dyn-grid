import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from '../.';
import Card from './Card';

const App = () => (
  <>
    <style>
      {` 
        * { box-sizing: border-box; }
        body { margin: 0; }
        .container { height: 100vh; padding: 100px; }
    `}
    </style>
    <div className="container">
      <Grid
        data={[...Array(1000)].map((_, i) => ({ id: i + 1 }))}
        item={Card}
        columns={8}
        masonry={false}
        rowGap={20}
        columnGap={10}
        itemHeight={200}
      />
    </div>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
