import logo from './logo.svg';
import './App.css';
import Header from './page/Header';
import MenuKontak from './page/MenuKontak';
import MenuProduct from './page/MenuProduct';
import MenuTentangkami from './page/MenuTentangKami';
import MenuUtama from './page/MenuUtama';
import Footer from './page/footer';


function App() {
  return (
    <div >
      <Header/>
      <MenuUtama />
      <MenuProduct />
      <MenuTentangkami />
      <MenuKontak />
      <Footer/>
    </div>
  );
}

export default App;
