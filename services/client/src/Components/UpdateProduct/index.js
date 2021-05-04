import React, { useEffect, useState } from 'react';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../../Utils/Toast';
import { Container, Button } from './styles';
import { updateProduct, getProduct } from '../../services/endpoints';

function UpdateProduct({ setVisible, id }) {
  const [name, setName] = useState('');
  const [days, setDays] = useState(0);
  const [providerDays, setProviderDays] = useState(0);
  const [und, setUnd] = useState('');
  const [sector, setSector] = useState('');
  const [resp, setResp] = useState('');
  const [provider, setProvider] = useState('');
  
  useEffect(() => {
    const fetchProducts = async() => {
      const res = await getProduct(id);
      setName(res.data.name)
      setDays(res.data.days)
      setUnd(res.data.und)
      setSector(res.data.sector)
      setResp(res.data.resp)
      setProvider(res.data.provider)
      setProviderDays(res.data.providerDays)
    }
    fetchProducts()
  }, [id])

  const handleProduct = async() => {

    try {
      await updateProduct(id, name, name, days, providerDays, und, sector, resp, provider);
      success('😄 Produto atualizado com sucesso!', 'top-right');
    } catch (e) {
      error('😕 Houve uma falha ao realizar o processo', 'top-right') 
    }
  }

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Atualizar produto</h1>
        <Input placeholderText="Nome" value={name} onChange={e => setName(e.target.value)} />
        <Input placeholderText="Und" value={und} onChange={e => setUnd(e.target.value)} />
        <Input placeholderText="Setor" value={sector} onChange={e => setSector(e.target.value)} />
        <Input placeholderText="Resp" value={resp} onChange={e => setResp(e.target.value)} />
        <Input placeholderText="Fornecedor" value={provider} onChange={e => setProvider(e.target.value)} />
        <br/>
        <br/><br/>
        <label>Dias fornecedor</label>
        <Input placeholderText="Dias de estoque" type="number" value={providerDays} onChange={e => setProviderDays(e.target.value)} />
        <br/>
        <label>Dias de estoque</label>
        <Input placeholderText="Dias de estoque" type="number" value={days} onChange={e => setDays(e.target.value)} />
        <br/>
        <Button color={'#20A506'} onClick={handleProduct}>Atualizar Produto</Button>
        <Button color={'#d10000'} onClick={() => setVisible(false)}>Voltar</Button>
      </Container>
    </>
  );
}

export default UpdateProduct;
