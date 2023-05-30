import React from 'react';
import { useStyles } from '../styles';

const Logo = (props) => {
  const styles = useStyles();
  return (
    <img
      src="/images/logo.png"
      alt="Food order"
      className={props.large ? styles.largeLogo : styles.logo}
    ></img>
  );
};

export default Logo;
