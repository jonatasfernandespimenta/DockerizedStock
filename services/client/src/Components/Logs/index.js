import React, { useEffect, useState } from 'react';
import { Column, Container, Row, Text } from '../Product/styles';
import { getLog, getProductByNameOrSku, getProducts } from '../../services/endpoints';

// import { Container } from './styles';

function Logs() {
  const [withdrawData, setWithdrawData] = useState(null);

  const [logs, setLogs] = useState([]);
  const [info, setInfo] = useState([]);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await getProductByNameOrSku('Decor cristal Kruscher 0,10 X 1,22 X 50');

      const productsRes = await getProducts();
      setProducts(productsRes.data)

      const logRes = await getLog();
      setLogs(logRes.data);

      setInfo(
        logRes?.data.product?.filter(i => i?.name === 'Decor cristal Kruscher 0,10 X 1,22 X 50')
        .map(p => p?.exits?.map(x => [x.withdrawDate, x.quantity, x.inputDate]))
      )
    };
    fetchProduct()
  }, [])

  const mappedProducts = products.map(x => x.name)

  logs?.product?.filter(i => i?.name === 'Decor cristal Kruscher 0,10 X 1,22 X 50')[0]?.exits?.map(x => x)

  const data = info.map(x => x.map(crr => {
    return {
      "withdrawDate": crr[0],
      "quantity": crr[1],
      "inputDate": crr[2]
    }}
  ));

  const handleSelection = async(e) => {
    setName(e.target.value)
    const res = await getProductByNameOrSku(e.target.value);
    const productsRes = await getProducts();
    setProducts(productsRes.data)

    const logRes = await getLog();
    setLogs(logRes.data);

    setInfo(
      logRes?.data.product?.filter(i => i?.name === e.target.value)
      .map(p => p?.exits?.map(x => [x.withdrawDate, x.quantity, x.inputDate]))
      )
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLog();
      setWithdrawData(res.data);
    };
    fetchData();
  }, [])

  return (
    <>
      <select name="products" onChange={e => handleSelection(e)} style={{ display: 'flex', marginLeft: '40%', height: 30, marginTop: 5 }} >
        <option value="" selected disabled hidden>Decor cristal Kruscher 0,10 X 1,22 X 50</option>
          {
            mappedProducts.sort().map(x => {
              return(
                <option value={x}>{x}</option>
              )
            })
          }
      </select>

      <Container>
      {
        data[0] ? data[0].map((item) => {
          return(
            <Row>
              <Text>Data: {item.withdrawDate !== null ? item.withdrawDate : item.inputDate}</Text>
            
              <Text>Quantidade: {item.quantity}</Text>
            
              <Text>Tipo: {item.withdrawDate !== null ? 'Saida' : 'Entrada'}</Text>
            </Row>
          );
        }
        )
      : null} 
      </Container>
    </>
  );
}

export default Logs;
