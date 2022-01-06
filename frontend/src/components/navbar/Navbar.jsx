import * as React from 'react';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Link } from '@material-ui/core';

const myLink = {
    margin: '10px'
}

const Navbar = () => {

    
  
  return (
    <AppBar position="static" color='pink'>
      <Container maxWidth="xl">
        <Toolbar>
            <Link style={myLink} href="/" underline="hover">
                Usuários
            </Link>
            <Link style={myLink} href="/cargos" underline="hover">
                Cargos
            </Link>
            <Link style={myLink} href="/perfis" underline="hover">
                Perfis
            </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;