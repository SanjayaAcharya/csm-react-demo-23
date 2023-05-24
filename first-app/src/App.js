import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './components/login';
import LandingComponent from './components/landing';
import CardListComponent from './components/listCards';
import DashboardComponent from './components/dashboard';
import RegistrationComponent from './components/registration';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLogin />}></Route>
        <Route path='login' element={<UserLogin />}></Route>
        <Route path='landing' element={<LandingComponent />}>
          <Route index element={<CardListComponent />} />
          <Route path='dashboard' element={<DashboardComponent />} />
          <Route path='view-list' element={<CardListComponent />} />
          <Route path='registration' element={<RegistrationComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
