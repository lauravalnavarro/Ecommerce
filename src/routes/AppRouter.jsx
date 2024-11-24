import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage.jsx";

// import SignIn from "./components/Signin";
// import SignUp from "./components/Signup";
// import Checkout from "./components/ProcessOrder/Checkout";
// import Products from "./pages/Products";
// import CheckoutPage from "./pages/CheckoutPage";

const AppRouter = () => {

  return (
    <Router>
      <div className='app'>
        <Switch>
            <Route path='/'>
                <HomePage />
             </Route>
        </Switch>
        {/* <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Products />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default AppRouter;
