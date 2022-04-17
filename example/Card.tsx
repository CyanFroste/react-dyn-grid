import * as React from 'react';

interface Props {
  data: { id: number };
}

const Card = ({ data }: Props) => (
  <div style={{ height: '100%', padding: 10, backgroundColor: '#eee' }}>
    {data.id}
  </div>
);

export default Card;
