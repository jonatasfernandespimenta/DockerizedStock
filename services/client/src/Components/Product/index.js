import React, { useEffect, useState } from 'react';
import { getProductByNameOrSku, getProducts } from '../../services/endpoints';
import { Container, Text, Button, Row, ButtonGroup } from './styles';

function Product({ setProductId, setVisible, setProductSku, setProductName, search, setIsUpdate }) {

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = search !== '' ? await getProductByNameOrSku(search) : await getProducts();
      setData(res.data);
    };
    fetchData();
  })

  return(
    <>
      {
        data?.map((item) => (
          <Container>
              <Row>
                <Text>Nome: {item.name}</Text>
                <Text>Em estoque: {item.quantity}</Text>
                <ButtonGroup>
                  <Button onClick={() => { 
                    setVisible(true); 
                    setIsUpdate(false); 
                    setProductSku(item.sku); 
                    setProductName(item.name) 
                  }}>
                    Adicionar Item
                  </Button>

                  <Button onClick={() => { 
                    setVisible(true); 
                    setIsUpdate(true); 
                    setProductId(item._id) }}>
                      Editar Produto
                  </Button>
                </ButtonGroup>
              </Row>
            </Container>
        ))
      }
    </>
  );
}

export default Product;
