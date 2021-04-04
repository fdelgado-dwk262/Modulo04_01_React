import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

import { MyContext } from './../OurContext';

import { CartComponent } from './../common/components/cart'

import { Link } from 'react-router-dom'

import { routes } from 'core/router';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC<any> = ({ children }) => {

  const myContext = React.useContext(MyContext);
  console.log('dentro de submodule list', myContext.show)

  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Galeria de fotos - [dwk262]
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.loginText}
          >
            {/* {userName} */}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
          >
            <Link color="inherit" to={routes.submoduleList}>
              home
            </Link>
          </Typography>

          <Button onClick={(e) => { myContext.handletoggleShow(e) }} >
            <ShoppingCartIcon />
          </Button>

        </Toolbar>

      </AppBar>
      {myContext.show && <CartComponent />}
      {children}
    </>
  );
};
