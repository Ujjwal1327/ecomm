import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ProductListing />
          </Route>
          <Route path="/product/:productId" exact>
            <ProductDetail />
          </Route>
          <Route path="*">
            <h2>4 0 4</h2>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
