import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header";
import {Route,Routes} from "react-router-dom"
import ProductCard from "./Pages/Product/ProductCard";
import Product from "./Pages/Product";
import Basket from "./Pages/Basket";
import Favorites from "./Pages/Favorites";

function App() {
  // const {cash} = useSelector(state => state)
  //   const dispatch = useDispatch()
  return (
    <div className="App">
      <Header/>
<Routes>
    <Route path={`/`} element={<Product/>}/>
    <Route path={`/basket`} element={<Basket/>}/>
    <Route path={`/favorites`} element={<Favorites/>}/>
</Routes>






      {/*<h1>{cash}</h1>*/}
      {/*  <button onClick={() => dispatch({type: 'ADD_MONEY', payload: 10})}>add</button>*/}
      {/*  <button onClick={() => dispatch({type: 'GET_MONEY', payload: 10})}>get</button>*/}
    </div>
  );
}

export default App;
