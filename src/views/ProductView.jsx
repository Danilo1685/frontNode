import { getProducts, deleteProduct } from '../services/productService.js';
import ProductForm from '../components/Productos/ProductForm.jsx';
import ProductList from '../components/Productos/ProductList.jsx';
import ExportPdfButton from '../components/ExportPdfButton.jsx';
import { useEffect, useState } from 'react';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const obtenerProductos = async () => {
    const response = await getProducts();
    if (response.status === 200) {
      setProducts(response.data.data);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">GESTIÓN DE PRODUCTOS</h2>
      <ProductForm obtenerProductos={obtenerProductos} productToEdit={productToEdit} setProductToEdit={setProductToEdit} />
      <ProductList products={products} handleDelete={handleDelete} handleEdit={handleEdit} />
      <ExportPdfButton type="products" data={products} />
    </div>
  );
}
