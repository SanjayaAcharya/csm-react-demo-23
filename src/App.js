import { useEffect, useState } from 'react';
import './App.css';
import ContentList from './components/ContentList';
import {AppProvider} from './appProvider';
import ContentList1 from './components/ContentList1';
import UserForm from './components/UserForm';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/404';
import WD from './components/services/wd';
import AD from './components/services/ad';
import DM from './components/services/dm';
import Services from './components/services';
import Parent from './components/services/parent';
import Home from './common/header/home';

function App() {
  return (
    <AppProvider>
      
      <Routes>
<Route path="/" element={<Home />}>
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/list" element={<ContentList />} />
        <Route path="/list1" element={<ContentList1 />} />
        <Route path="services" element={<Parent />} >
          <Route index element={<Services/>} />
          <Route path="wd" element={<WD />} />
          <Route path="ad" element={<AD />} />
          <Route path="dm" element={<DM />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;