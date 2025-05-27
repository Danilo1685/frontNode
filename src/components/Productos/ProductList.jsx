export default function ProductList({ products, handleDelete, handleEdit }) {
  return (
    <table className="table-auto w-full border mt-4 tabla-productos">
      <thead>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td className="border px-4 py-2">{p.nombre}</td>
            <td className="border px-4 py-2">{p.precio}</td>
            <td className="border px-4 py-2">
              <div className="flex gap-2">
                <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  ELIMINAR
                </button>
                <button onClick={() => handleEdit(p)} className="bg-blue-500 text-white px-2 py-1 rounded">
                  EDITAR
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
