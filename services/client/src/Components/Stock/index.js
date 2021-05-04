import React, { useEffect, useState } from 'react';
import { getProducts, getLog } from '../../services/endpoints';

// import { Container } from './styles';

function Stock() {
  const [product, setProduct] = useState(null);
  const [withdrawRes, setWithdrawRes] = useState(null);

  useEffect(() => {
    const fetchProductData = async() => {
      const res = await getProducts();
      const withdrawRes = await getLog();

      setProduct(res.data)
      setWithdrawRes(withdrawRes)
    };
    fetchProductData();
  }, [])

  let days = 15;

  const qtySum = (product) => {
    const last15 = withdrawRes?.data.product.filter(i => i?.name === product?.name).map(p => p?.exits?.slice(Math.max(p?.exits?.length - days, 0)))
  
    let summed = last15?.map(i => i.map(p => p.quantity).reduce((a, b) => a + b, 0))

    if(summed < 3 || summed?.length === 0) {
      days = 30;
      summed = last15?.map(i => i.map(p => p.quantity).reduce((a, b) => a + b, 0))
      if(summed < 3 || summed?.length === 0) {
        days = 60;
        summed = last15?.map(i => i.map(p => p.quantity).reduce((a, b) => a + b, 0))
        if(summed < 3 || summed?.length === 0) {
          days = 90;
          summed = last15?.map(i => i.map(p => p.quantity).reduce((a, b) => a + b, 0))
          if(summed < 3 || summed?.length === 0) {
            days = 180;
            summed = last15?.map(i => i.map(p => p.quantity).reduce((a, b) => a + b, 0))
            if(summed?.length === 0) {
              summed = [0];
            }
          }
        }
      }
      
    }

    return summed;
  }

  
  const calculateVelocity = (product) => {
    let summedQty = qtySum(product) / days;
    const returnValue = summedQty
    return returnValue
  }

  const calculateMedian = (product) => {
    let median = product.quantity / calculateVelocity(product);

    return median;
  }

  const handleShouldBuy = (product) => {

    if(product.providerDays === undefined) {
      product.providerDays = 0;
    }

    if(product.days === undefined) {
      product.days = 0;
    }

    if(calculateMedian(product) > product.providerDays + product.days) {
      return(
        <div style={{ background: '#20A506', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h4 style={{color: 'white'}}>NÃO</h4>
        </div>
      );
    } else {
      return(
        <div style={{ background: '#d10', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h4 style={{color: 'white'}}>SIM</h4>
        </div>
      );
    }
  }

  console.log(product?.sort((a, b) => (calculateVelocity(a).toFixed(2) < calculateVelocity(b).toFixed(2) ? 1 : -1)))

  return(
    <>
      <table id="stock">
        <tr>
          <th>Produto</th>
          <th>Und</th>
          <th>Setor</th>
          <th>Resp</th>
          <th>Fornecedor</th>
          <th>Em estoque</th>
          <th>Consumo por dia</th>
          <th>Dias de estoque restantes</th>
          <th>Dias de estoque desejavel</th>
          <th>Dias para fornecimento</th>
          <th>Deve comprar?</th>
        </tr>
        {
          product?.sort((a, b) => (calculateVelocity(a).toFixed(2) < calculateVelocity(b).toFixed(2) ? 1 : -1)).map((p) => {
            return(
              <tr>
                <td>{p.name}</td>
                <td>{p.und}</td>
                <td>{p.sector}</td>
                <td>{p.resp}</td>
                <td>{p.provider}</td>
                <td>{p.quantity}</td>
                <td>{calculateVelocity(p).toFixed(2)}</td>
                <td>{calculateMedian(p) === Infinity ? '-' : calculateMedian(p).toFixed(0)}</td>
                <td>{p.days}</td>
                <td>{p.providerDays}</td>
                <td>{handleShouldBuy(p)}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default Stock;
