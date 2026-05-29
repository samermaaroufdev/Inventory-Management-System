import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails6=()=>{
    return (
        <Table image={cardObj[5].image} pid={cardObj[5].id} pname={cardObj[5].name} quantity={cardObj[5].quantity}
        supplier={cardObj[5].supplier} date={cardObj[5].date}/>
    )
}

export default ProductDetails6;