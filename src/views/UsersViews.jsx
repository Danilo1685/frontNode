import { useEffect, useState } from 'react';
import UserForm from '../components/User/UserForm.jsx';
import UserList from '../components/User/UserList.jsx';
import ExportPdfButton from '../components/ExportPdfButton.jsx';
import { getUsers, deleteUser } from '../services/userService.js';

export default function UsersView() {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null); 

  const obtenerUsuarios = async () => {
    const response = await getUsers();
    if (response.status === 200) {
      setUsers(response.data.data);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(u => u.id !== id));
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">GESTIÓN DE USUARIOS</h2>
      <UserForm 
        obtenerUsuarios={obtenerUsuarios}
        userToEdit={userToEdit}
        setUserToEdit={setUserToEdit}
      />
      <UserList 
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
        users={users}
      />
      <ExportPdfButton type="users" data={users} />
    </div>
  );
}
