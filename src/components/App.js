import '../styles/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
