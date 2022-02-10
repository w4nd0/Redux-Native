import React from 'react';

import {Container} from './styles';
import logo from '../../Assets/logo.png';
import {Image} from 'react-native';

const Header = () => {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
};

export default Header;
