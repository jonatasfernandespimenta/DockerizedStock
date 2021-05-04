import React, { useEffect, useState } from 'react';
import { createItem } from '../../services/endpoints';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../../Utils/Toast';
import DatePicker, { registerLocale } from "react-datepicker";
import { Container, Button } from './styles';

import pt from 'date-fns/locale/pt-BR';
registerLocale('pt', pt)

function AddItemModal({ setVisible, productSku, productName }) {
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => quantity < 0 ? setQuantity(0) : null, [quantity]);

  const handleAddItem = async() => {
    try {
      const res = await createItem(date, Number(quantity), productSku, productName);

      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url;
      link.setAttribute('download', 'teste.txt')
      document.body.appendChild(link)
      link.click()

      success('😄 Entrada realizada com sucesso!', 'top-right');
    } catch (e) {
      console.log(e)
      error('😕 Houve uma falha ao realizar o processo', 'top-right')
    }
  }

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Adicionar item</h1>
        <p>SKU: {productSku}</p>
        <p>Selecione o dia da entrada:</p>
        <DatePicker
          selected={date}
          onChange={date => setDate(date)}
          dateFormat="dd/MM/yyyy"
          locale="pt"
        />
        <Input placeholderText="Quantidade" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <Button onClick={handleAddItem} color={'#20A506'}>Dar entrada</Button>
        <Button onClick={() => setVisible(false)} color={'#d10000'}>Voltar</Button>
      </Container>
    </>
  );
}

export default AddItemModal;
