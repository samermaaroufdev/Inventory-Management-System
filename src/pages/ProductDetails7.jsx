import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails7=()=>{
    return (
        <Table image={cardObj[6].image} pid={cardObj[6].id} pname={cardObj[6].name} quantity={cardObj[6].quantity}
        supplier={cardObj[6].supplier} date={cardObj[6].date}/>
    )
}

export default ProductDetails7;