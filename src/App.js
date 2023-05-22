import { useEffect, useState } from 'react';
import './App.css';
import Header from './common/header/header';
import ContentList from './components/ContentList';
import {AppProvider} from './appProvider';
import ContentList1 from './components/ContentList1';
import UserForm from './components/UserForm';

function App() {
  const [myState, setMyState] = useState(1)
  const [hideHeader, setHideHeader] = useState(false)
  

  return (
    <AppProvider>
    {!hideHeader && <Header title="Home Page" desc="My Home page content" />}
      <br/>
      <button onClick={()=>{setMyState(myState+1)}}>Click</button>
      <button onClick={()=>{setHideHeader(false)}}>Hide Header</button>
      <hr/>
      <UserForm />
      <ContentList/>
      <ContentList1/>
    </AppProvider>
  );
}

export default App;