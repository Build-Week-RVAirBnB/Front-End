import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item as={Link} to='/' name='home' />
      <Menu.Item as={Link} to='/listings' name='listings' />
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/logout' name='logout' />
        <Menu.Item as={Link} to='/signin' name='login' />
        <Menu.Item as={Link} to='/signup' name='register' />
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;