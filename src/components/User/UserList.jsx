export default function UserList({ handleDelete, handleEdit, users }) {
  return (
    <table className="table-auto w-full border mt-4 tabla-usuarios">

      <tbody>
        {users?.map(u => (
          <tr key={u.id}>
            <td className="border px-4 py-2">{u.nombre}</td>
            <td className="border px-4 py-2">{u.mail}</td>
            <td className="border px-4 py-2">{u.edad}</td>
            <td className="border px-4 py-2">
            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(u.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                ELIMINAR
              </button>
              <button
                onClick={() => handleEdit(u)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
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
