import React, { useEffect, useState } from 'react';
import { createItem, getLog, getProduct, getProductByNameOrSku, getProducts } from '../../services/endpoints';

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Bar
} from "recharts";

import { Container } from './styles';

function HomeComponent() {
  const [logs, setLogs] = useState([]);
  const [info, setInfo] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const [inStock, setInStock] = useState('');

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await getProductByNameOrSku('Decor cristal Kruscher 0,10 X 1,22 X 50');

      const productsRes = await getProducts();
      setProducts(productsRes.data)

      const logRes = await getLog();

      const infos = logRes?.data.product?.filter(i => i?.name === 'Decor cristal Kruscher 0,10 X 1,22 X 50')
      .map(p => p?.exits?.map(x => [x.withdrawDate, x.quantity, x.inputDate]))

      let totalExits = [];

      const mapInfo = infos[0] ? infos[0].map(x => totalExits.push(x[1])) : 0

      setTotal(res?.data[0]?.quantity + totalExits.reduce((a, b) => a + b, 0))

      setLogs(logRes.data);

      setInfo(infos)
    };
    fetchProduct()
  }, [])

  //logs?.product?.filter(i => i?.name === 'Decor cristal Kruscher 0,10 X 1,22 X 50')[0].exits?.map(x => x)

  const handleSelection = async(e) => {
    const search = e.target.value.split(',')
    const res = await getProduct(search[1]);

    const productsRes = await getProducts();
    setProducts(productsRes.data)
    
    const logRes = await getLog();
    
    const infos = logRes?.data.product?.filter(i => i?.name === search[0])
    .map(p => p?.exits?.map(x => [x.withdrawDate, x.quantity, x.inputDate]))

    let totalExits = [];
    
    const mapInfo = infos[0] ? infos[0].map(x => x[0] !== 'Invalid Date' ? totalExits.push(x[1]) : null) : 0

    const total = totalExits.reduce((a, b) => a + b, 0)

    setTotal(res?.data?.quantity + totalExits.reduce((a, b) => a + b, 0))
    
    setLogs(logRes.data);
    
    setInfo(infos)
    const inputs = totalExits.length > 0 ? totalExits.reduce((a, b) => a + b, 0) : 0;
    setInStock(res?.data?.quantity)

    //await createItem('11/27/2000', Number(total), search[0], search[0]);

  }

  let newTotal = inStock;
  let i = 0
  const mappedProducts = products.map(x => [x.name, x._id])

  const data = info.map(x => x.map(crr => {
    newTotal = i!==0 ? crr[0] !== 'Invalid Date' ? newTotal - crr[1] : newTotal : inStock;
    i++
    return {
      "name": crr[0] !== 'Invalid Date' ? crr[0] : crr[2],
      "saidas": crr[0] !== 'Invalid Date' ? crr[1] : 0,
      "saldo": newTotal,
      "entradas": crr[0] === 'Invalid Date' ? crr[1] : 0
    }}
  ));

  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

    <select name="products" id="products-dropdown" onChange={e => handleSelection(e)}>
    <option value="" selected disabled hidden>Decor cristal Kruscher 0,10 X 1,22 X 50</option>
      {
        mappedProducts.sort().map(x => {
          return(
            <option value={x} key={x[1]}>{x[0]}</option>
          )
        })
      }
    </select>
    <Container>
    <p>Em estoque: {inStock}</p>
      <ComposedChart
        width={1000}
        height={500}
        data={data[0]}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="entradas" barSize={100} fill="#413ea0" />
        <Bar dataKey="saidas" barSize={100} fill="red" />
        <Line type="monotone" dataKey="saldo" stroke="#ff7300" />
      </ComposedChart>
    </Container>
    </div>
  );
}

export default HomeComponent;
