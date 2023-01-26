import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import BackGround from './components/BackGround'
import Ordenes from './components/Ordenes';
import Footer from './components/Footer'


function App() {
    
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <BackGround />
                    </Route>
                    <Route path="/categories/:categoryid">
                        <ItemListContainer />
                    </Route>
                    <Route path="/categories">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:itemid">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/Cart">
                        <Cart />
                    </Route>
                    <Route path="/reserva">
                        <Ordenes />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </CartProvider>
    );
}



export default App;