# React Dyn Grid

This component allows you to render grid items without much pain.

<br>

## Usage

```
import { Grid } from 'react-dyn-grid';

// Your Component that will render the item
const Card = ({ data }) => (
  <div
    style={{
      height: '100%',
      padding: 10,
      backgroundColor: '#eee'
    }}
  >
    {data.id}
  </div>
);

const App = () => (
    <div
      className="container"
      style={{ height: '100vh' }}
    >
      <Grid
        data={Array.from({length: 1000}, (_, i) => ({ id: i + 1 }))}
        item={Card}
        columns={8}
        masonry={false}
        rowGap={20}
        columnGap={10}
        itemHeight={200} // pass nothing for 'auto' height
      />
    </div>
);
```
