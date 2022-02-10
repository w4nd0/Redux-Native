import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../Components/FloatingCart';
import api from '../../Services/api';
import formatValue from '../../Utils/formatValue';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  PriceContainer,
  ProductButton,
  ProductButtonText,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle,
} from './styles';
import {useDispatch} from 'react-redux';

const Catalog = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const {data} = await api.get('/products');
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAddToCart = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  const renderItem = ({item}) => (
    <Product>
      <ProductImage source={{uri: item.image_url}} />
      <ProductTitle>{item.title}</ProductTitle>
      <PriceContainer>
        <ProductPrice>{formatValue(item.price)}</ProductPrice>
        <ProductButton onPress={() => handleAddToCart(item.id)}>
          <ProductButtonText>adicionar</ProductButtonText>
          <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
        </ProductButton>
      </PriceContainer>
    </Product>
  );
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(_, index) => index.toString()}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 80}}
          renderItem={renderItem}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Catalog;
