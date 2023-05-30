import React, { useContext, useEffect } from 'react';
import { useStyles } from '../styles';
import { listCategories } from '../actions';
import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Logo from '../components/Logo';
import { Store } from '../Store';

const OrderScreen = () => {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { loading, categories, error } = state.categoryList;

  useEffect(() => {
    listCategories(dispatch);
  }, [dispatch]);

  return (
    <Box className={styles.root}>
      <Box className={styles.main}>
        <Grid container>
          <Grid item md={2}>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem button>
                    <Logo></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem button key={category.name}>
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Grid>
          <Grid item md={10}>
            Food list
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderScreen;
