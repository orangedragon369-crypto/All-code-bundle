export default function ProductCategoryRow({PRODUCTS}){
    return (
        <tr>
            <td colSpan="2"><b>{PRODUCTS.category}</b></td>
        </tr>
    )
}