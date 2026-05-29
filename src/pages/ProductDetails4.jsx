import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails4=()=>{
    return (
        <Table image={cardObj[3].image} pid={cardObj[3].id} pname={cardObj[3].name} quantity={cardObj[3].quantity}
        supplier={cardObj[3].supplier} date={cardObj[3].date}/>
    )
}

export default ProductDetails4;