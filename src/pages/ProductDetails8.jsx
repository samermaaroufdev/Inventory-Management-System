import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails8=()=>{
    return (
        <Table image={cardObj[7].image} pid={cardObj[7].id} pname={cardObj[7].name} quantity={cardObj[7].quantity}
        supplier={cardObj[7].supplier} date={cardObj[7].date}/>
    )
}

export default ProductDetails8;