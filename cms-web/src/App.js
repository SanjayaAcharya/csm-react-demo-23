import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login';
import ListPage from './pages/list/listPage';
import CreatePage from './pages/create/create';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index path="login" element={<LoginPage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="create" element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
