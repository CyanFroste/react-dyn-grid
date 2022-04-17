import { createStyles } from './utils';

const styles = createStyles({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },

  normal: {
    display: 'grid',
  },

  masonry: {
    display: 'flex',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default styles;
