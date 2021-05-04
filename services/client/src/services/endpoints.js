import api from './index';

export const getProducts = async() => await api.get('/products');

export const getProduct = async(id) => await api.get('/products/' + id);

export const createItem = async(createdAt, quantity, sku, productName) => await api.post('/item', { createdAt, quantity, sku, productName });

export const getProductByNameOrSku = async(param) => await api.get(`/products/name/${param}`)

export const getLog = async() => await api.get('/log');

export const createProduct = async(
  sku, name, providerDays, und, sector, resp, provider
) => await api.post('/products', { sku, quantity: 0, name, providerDays: providerDays, und, sector, resp, provider });

export const updateProduct = async(
  id, name, sku, days, providerDays, und, sector, resp, provider
) => await api.put('/products/' + id, {name, sku, days, providerDays: providerDays, und, sector, resp, provider})
