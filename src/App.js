import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Store from './pages/Store';

function App() {
  return (
    <Container>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
