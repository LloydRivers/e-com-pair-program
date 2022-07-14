import ProductCard from "./Components/Cards/ProductCard";

function App() {
  const url = process.env.REACT_APP_API_ENPOINT;

  console.log(url);
  return (
    <div className="App">
      <ProductCard />
    </div>
  );
}

export default App;
