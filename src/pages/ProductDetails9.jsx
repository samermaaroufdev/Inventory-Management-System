import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails9=()=>{
    return (
        <Table image={cardObj[8].image} pid={cardObj[8].id} pname={cardObj[8].name} quantity={cardObj[8].quantity}
        supplier={cardObj[8].supplier} date={cardObj[8].date}/>
    )
}

export default ProductDetails9;