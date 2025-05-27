import { useEffect, useState } from 'react';
import { createProduct, updateProduct } from '../../services/productService';

export default function ProductForm({ obtenerProductos, productToEdit, setProductToEdit }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setNombre(productToEdit.nombre);
      setPrecio(productToEdit.precio);
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productToEdit) {
      await updateProduct(productToEdit.id, { nombre, precio });
      setProductToEdit(null); // limpiar edición
    } else {
      await createProduct({ nombre, precio });
    }

    setNombre('');
    setPrecio('');
    obtenerProductos();
  };

  const handleCancelEdit = () => {
    setProductToEdit(null);
    setNombre('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre"
        className="border p-2 mr-2"
      />
      <input
        value={precio}
        onChange={e => setPrecio(e.target.value)}
        placeholder="Precio"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {productToEdit ? 'ACTUALIZAR' : 'AGREGAR'}
      </button>
      {productToEdit && (
        <button
          type="button"
          onClick={handleCancelEdit}
          className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
        >
          CANCELAR
        </button>
      )}
    </form>
  );
}
