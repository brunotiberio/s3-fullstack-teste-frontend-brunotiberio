import { StyledGlobal } from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import PersonalData from './components/PersonalData';
import Contacts from './components/Contacts';
import ContactDetail from './components/ContactDetail';
import UpdateContact from './components/UpdateContact';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <>
    <StyledGlobal />
      <Header>
        <PersonalData />
      </Header>
      <Main>
        <Contacts />
        <ContactDetail />
        <UpdateContact />
        <Register />
        <Login />
      </Main>
    </>
  );
}

export default App;
