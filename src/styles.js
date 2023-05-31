import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navy: {
    backgroundColor: '#003080',
  },
  red: {
    backgroundColor: '#ff2040',
    color: '#ffffff',
  },
  img: {
    height: 50,
    width: 50,
  },

  main: {
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    color: '#ffffff',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  green: {
    backgroundColor: '#00b020',
  },
  largeLogo: {
    height: 100,
  },
  logo: {
    height: 50,
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },
  card: { margin: 10 },
  title: {
    marginTop: 18,
  },
  space: {
    padding: 10,
  },
  media: { width: 200 },
  largeButton: {
    width: 250,
    margin: 10,
  },
  largeInput: {
    width: '60px!important',
    padding: '0! important',
    fontSize: '30px!important',
    textAlign: 'center!important',
    backgroundColor: 'transparent !important',
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderStyle: 'solid',
  },
  row: {
    display: 'flex',
    padding: 20,
  },
  around: {
    justifyContent: 'space-between',
  },

  between: {
    justifyContent: 'space-between',
  },

  column: { flexDirection: 'column' },
}));
