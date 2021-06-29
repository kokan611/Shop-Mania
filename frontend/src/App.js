//import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

import ShippingScreen from "./screens/ShippingScreen";

import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />

          <Route path="/search/:keyword" component={HomeScreen} exact />

          <Route path="/page/:pageNumber" component={HomeScreen} />

          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
          />
          <Route path="/products/:id" component={ProductScreen} />

          <Route path="/login" component={LoginScreen} />

          <Route path="/shipping" component={ShippingScreen} />

          <Route path="/register" component={RegisterScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />

          <Route path="/order/:id?" component={OrderScreen} />

          <Route path="/payments" component={PaymentScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} exact />

          <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact/>

          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
