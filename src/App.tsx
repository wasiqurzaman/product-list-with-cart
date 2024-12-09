import ProductCard from "./components/ProductCard";
import Products from "./data/data.json";

function App() {
  return (
    <div>
      <ProductCard product={Products[0]} />
    </div>
  );
}

export default App;
