import ProductCard from "./Components/Cards/ProductCard";

import User from "./Pages/User/User";

function App() {
  const url = process.env.REACT_APP_API_ENPOINT;

  console.log(url);
  return (
    <div className="App">
      <ProductCard />
     <User/>
    </div>
  );
}

export default App;
