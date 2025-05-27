import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsView from './views/ProductView';
import UsersView from './views/UsersViews';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white flex justify-center gap-4">
        <Link to="/productos">PRODUCTOS</Link>
        <Link to="/usuarios">USUARIOS</Link>
      </nav>
        <Routes>
          <Route path="/productos" element={<ProductsView />} />
          <Route path="/usuarios" element={<UsersView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;