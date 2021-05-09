import React from "react";
import { Typography } from '@material-ui/core';

const Header = (props) => {
  return (
    <header className="App-header">
        <Typography
            variant="h2"
            align="center"
        >
            {props.text}
        </Typography>
    </header>
  );
};

export default Header;