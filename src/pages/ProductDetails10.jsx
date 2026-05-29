import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails10=()=>{
    return (
        <Table image={cardObj[9].image} pid={cardObj[9].id} pname={cardObj[9].name} quantity={cardObj[9].quantity}
        supplier={cardObj[9].supplier} date={cardObj[9].date}/>
    )
}

export default ProductDetails10;