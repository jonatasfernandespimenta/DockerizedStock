import './App.css';
import Input from './Components/Input';

import { useState } from 'react';
import { handleContent, handleMenuButtons } from './Utils/MenuRendering';


function App() {
  const [visible, setVisible] = useState(false);
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');
  const [search, setSearch] = useState('');
  const [content, setContent] = useState('home');
  const [isUpdate, setIsUpdate] = useState(false);
  const [productId, setProductId] = useState('');

  return (
    <div className="Container">
      <div className="Header" />

      { handleMenuButtons(setContent) }

      <div className="Content">
      <br/><br/><br/><br/><br/><br/><br/>
        {
          content === 'products' ? 
            <Input placeholderText="Busque por um produto..." isSearch value={search} onChange={e => setSearch(e.target.value)} content={content} />
          : null
        }
        <br/><br/><br/><br/>
        <div className="Products">
          {
            handleContent(content, productSku, productName, setProductSku, setProductName, setVisible, visible, search, isUpdate, setIsUpdate, setProductId, productId)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
