import Table from '../components/Table'
import {cardObj} from './Products'
import '../style/product_details.css'
const ProductDetails3=()=>{
    return (
        <Table image={cardObj[2].image} pid={cardObj[2].id} pname={cardObj[2].name} quantity={cardObj[2].quantity}
        supplier={cardObj[2].supplier} date={cardObj[2].date}/>
    )
}

export default ProductDetails3;