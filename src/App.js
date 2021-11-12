import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Deshbord from './Deshbord/Deshbord';
import PrivateRoute from './PrivateRoute/PrivateRoute';

//Name: cameraGallery
//Password: tkhiacG3N28InCtc
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/deshbord">
              <Deshbord></Deshbord>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
