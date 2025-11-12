import { PRODUCTS } from "./App.jsx";   
import ProductRow from "./ProductRow.jsx";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable(){
    const rows = [];
    let lastCategory = null

    PRODUCTS.forEach((PRODUCTS, index) => {
        if (PRODUCTS.category !== lastCategory){
            rows.push(<ProductCategoryRow key={`${index}_category`} PRODUCTS={PRODUCTS}/>)}
        rows.push(<ProductRow key={`${index}_product`} PRODUCTS={PRODUCTS} />)
        lastCategory = PRODUCTS.category;
    })
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}