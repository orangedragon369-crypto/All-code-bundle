

export default function ProductRow({PRODUCTS}){
    return(
        <tr>
            <td>{PRODUCTS.name}</td>
            <td>{PRODUCTS.price}</td>
        </tr>
    )
}