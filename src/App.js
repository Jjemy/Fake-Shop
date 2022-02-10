import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing/>} />
          <Route path='/product/:productId' exact element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
