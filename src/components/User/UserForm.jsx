import { useEffect, useState } from 'react';
import { createUser, updateUser } from '../../services/userService';

export default function UserForm({ obtenerUsuarios, userToEdit, setUserToEdit }) {
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setNombre(userToEdit.nombre);
      setMail(userToEdit.mail);
      setEdad(userToEdit.edad);
    }
  }, [userToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userToEdit) {
      await updateUser(userToEdit.id, { nombre, mail, edad });
      setUserToEdit(null); // salir del modo edición
    } else {
      await createUser({ nombre, mail, edad });
    }

    setNombre('');
    setMail('');
    setEdad('');
    obtenerUsuarios();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" className="border p-2 mr-2" />
      <input value={mail} onChange={e => setMail(e.target.value)} placeholder="Email" className="border p-2 mr-2" />
      <input value={edad} onChange={e => setEdad(e.target.value)} placeholder="Edad" className="border p-2 mr-2" />
      <button type="submit" className={`px-4 py-2 rounded text-white ${userToEdit ? 'bg-blue-600' : 'bg-green-600'}`}>
        {userToEdit ? 'ACTUALIZAR' : 'AGREGAR'}
      </button>
    </form>
  );
}
