import { useState, useEffect } from 'react'
import { fetchProduct } from "./utils/utils.js";
import './App.css'
import SearchProduct from "./component/SearchProduct/SearchProduct.jsx";
import Form from './component/Form/Form.jsx';

import "bootstrap/dist/css/bootstrap.min.css"

const products = fetchProduct();

function App() {
  const [limit, setLimit] = useState(5);
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      {/* <button onClick={() => setLimit(5)}>Set Limit 5</button>
      <button onClick={() => setLimit(10)}>Set Limit 10</button>
      <button onClick={() => setLimit(15)}>Set Limit 15</button>
      <button onClick={() => setIsDark(!isDark)}>{isDark ? "Light" : "Dark"}</button>
      {
        products.length > 0 
        ? 
        <SearchProduct 
            products={products} 
            limit={limit}
            theme={isDark ? "dark" : "light"} 
          />
        : "No Data"
      } */}

      <Form />
    </>
  )
}

export default App
