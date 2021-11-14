import './App.css';
// import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
// import Login from './Login/Login/Login';
// import Register from './Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
// import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
// import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import Collections from './Pages/Collections/Collections';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import Purchase from './Pages/Purchase/Purchase';


//Name: cameraGallery
//Password: tkhiacG3N28InCtc
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/collections">
              <Collections></Collections>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
