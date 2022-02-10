import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../Utils/formatValue';

import {
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container,
} from './styles';

const FloatingCart = () => {
  const navigate = useNavigation();

  const products = useSelector(({cart}) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const CartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount;
      return totalPrice;
    }, 0);

    return formatValue(CartAmount);
  }, [products]);

  return (
    <Container>
      <CartButton onPress={() => navigate.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
        <CartButtonText>
          {cartSize}
          {cartSize === 1 ? ' item' : ' items'}
        </CartButtonText>

        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>

        <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
