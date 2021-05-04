import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { InputContainer, Container } from './styles';

function Input({ placeholderText, isSearch, type, onChange, value }) {
  return(
    <>
      <Container>
        {isSearch ? <FaSearch color="#787878" style={{ marginRight: 6, marginLeft: 4 }} /> : null }
        <InputContainer type={type} placeholder={placeholderText} onChange={onChange} value={value} />
      </Container>
    </>
  );
}

export default Input;
