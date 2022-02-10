import React from 'react';
import LottieView from 'lottie-react-native';
import empytCartAnimation from '../../../empyCartAnimation-dio.json';
import {Container, EmptyCartContainer, EmptyCartText} from './styles';

const EmptyCart = () => {
  return (
    <Container>
      <EmptyCartContainer>
        <LottieView
          source={empytCartAnimation}
          resizeMode="contain"
          autoPlay
          loop
        />
      </EmptyCartContainer>
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  );
};

export default EmptyCart;
