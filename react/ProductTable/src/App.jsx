import {useState} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const filterProducts = ({name, onlyInStock}) => {
    const filtered = PRODUCTS.filter((products) => {
      let nameMatch = false;
      let stockMatch = false;
      nameMatch = name ? products.name.toLowerCase.includes((name.toLowerCase)): true;
      stockMatch = onlyInStock ?products.stocked: true;
      return nameMatch && stockMAtch;
    });
    setFilteredProducts(filtered);
  };
  return (
    <>
      <header>Products</header>
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </>
  )
}

export default App;
export {PRODUCTS};