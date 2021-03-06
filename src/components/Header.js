import React from 'react';
import BloggetLogo from '../components/BloggetLogo';
import { Dimmer, Loader } from 'semantic-ui-react';

const Header = props => (
  <header>
    <BloggetLogo />
    {props.isLoading}
  </header>
);

export default Header;
